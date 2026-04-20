import { useRef, useState, useCallback, useEffect } from "react";

interface RangeSliderProps {
  min: number;
  max: number;
  step: number;
  valueMin: number;
  valueMax: number;
  onChange: (lo: number, hi: number) => void;
  formatValue?: (v: number, isMax: boolean) => string;
}

const RangeSlider = ({
  min,
  max,
  step,
  valueMin,
  valueMax,
  onChange,
  formatValue = (v) => String(v),
}: RangeSliderProps) => {
  const trackRef = useRef<HTMLDivElement>(null);
  const [dragging, setDragging] = useState<"lo" | "hi" | null>(null);
  const [inputLo, setInputLo] = useState<string>(formatValue(valueMin, false));
  const [inputHi, setInputHi] = useState<string>(formatValue(valueMax, true));

  useEffect(() => {
    setInputLo(formatValue(valueMin, false));
    setInputHi(formatValue(valueMax, true));
  }, [valueMin, valueMax, formatValue]);

  const pctLo = ((valueMin - min) / (max - min)) * 100;
  const pctHi = ((valueMax - min) / (max - min)) * 100;

  const valueFromClientX = useCallback(
    (clientX: number) => {
      const track = trackRef.current;
      if (!track) return min;
      const rect = track.getBoundingClientRect();
      const ratio = Math.max(0, Math.min(1, (clientX - rect.left) / rect.width));
      const raw = min + ratio * (max - min);
      const stepped = Math.round(raw / step) * step;
      return Math.max(min, Math.min(max, stepped));
    },
    [min, max, step],
  );

  useEffect(() => {
    if (!dragging) return;
    const move = (e: MouseEvent | TouchEvent) => {
      const x = "touches" in e ? e.touches[0].clientX : (e as MouseEvent).clientX;
      const v = valueFromClientX(x);
      if (dragging === "lo") {
        onChange(Math.min(v, valueMax - step), valueMax);
      } else {
        onChange(valueMin, Math.max(v, valueMin + step));
      }
    };
    const up = () => setDragging(null);
    window.addEventListener("mousemove", move);
    window.addEventListener("touchmove", move);
    window.addEventListener("mouseup", up);
    window.addEventListener("touchend", up);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("touchmove", move);
      window.removeEventListener("mouseup", up);
      window.removeEventListener("touchend", up);
    };
  }, [dragging, valueFromClientX, onChange, valueMin, valueMax, step]);

  const handleStyle = (active: boolean): React.CSSProperties => ({
    position: "absolute",
    top: "50%",
    transform: `translate(-50%, -50%) scale(${active ? 1.2 : 1})`,
    width: 20,
    height: 20,
    borderRadius: "50%",
    background: "#ffffff",
    border: "2px solid #d3a36e",
    boxShadow: "0 2px 6px rgba(0,0,0,0.12)",
    cursor: "pointer",
    transition: "transform 150ms ease",
    touchAction: "none",
  });

  const onKeyHandle = (which: "lo" | "hi") => (e: React.KeyboardEvent) => {
    const delta = e.key === "ArrowRight" || e.key === "ArrowUp" ? step : e.key === "ArrowLeft" || e.key === "ArrowDown" ? -step : 0;
    if (!delta) return;
    e.preventDefault();
    if (which === "lo") {
      onChange(Math.max(min, Math.min(valueMax - step, valueMin + delta)), valueMax);
    } else {
      onChange(valueMin, Math.min(max, Math.max(valueMin + step, valueMax + delta)));
    }
  };

  const commitInput = (which: "lo" | "hi", raw: string) => {
    const num = parseInt(raw.replace(/[^\d]/g, ""), 10);
    if (Number.isNaN(num)) {
      setInputLo(formatValue(valueMin, false));
      setInputHi(formatValue(valueMax, true));
      return;
    }
    const clamped = Math.max(min, Math.min(max, Math.round(num / step) * step));
    if (which === "lo") {
      onChange(Math.min(clamped, valueMax - step), valueMax);
    } else {
      onChange(valueMin, Math.max(clamped, valueMin + step));
    }
  };

  const inputStyle: React.CSSProperties = {
    width: 120,
    border: "1px solid #e5e0da",
    borderRadius: 7,
    padding: "10px 12px",
    fontSize: 15,
    fontWeight: 400,
    color: "#3a3a3a",
    fontFamily: "var(--font-body)",
    outline: "none",
  };

  return (
    <div>
      <div
        ref={trackRef}
        style={{
          position: "relative",
          height: 20,
          margin: "8px 10px",
          touchAction: "none",
        }}
      >
        {/* Track background */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: 0,
            right: 0,
            height: 4,
            background: "#e5e0da",
            transform: "translateY(-50%)",
          }}
        />
        {/* Active fill */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: `${pctLo}%`,
            right: `${100 - pctHi}%`,
            height: 4,
            background: "#d3a36e",
            transform: "translateY(-50%)",
          }}
        />
        {/* Lo handle */}
        <div
          tabIndex={0}
          role="slider"
          aria-label="Minimum price"
          aria-valuemin={min}
          aria-valuemax={max}
          aria-valuenow={valueMin}
          onKeyDown={onKeyHandle("lo")}
          onMouseDown={(e) => {
            e.preventDefault();
            setDragging("lo");
          }}
          onTouchStart={() => setDragging("lo")}
          style={{ ...handleStyle(dragging === "lo"), left: `${pctLo}%`, zIndex: pctLo > 90 ? 1 : 2 }}
        />
        {/* Hi handle */}
        <div
          tabIndex={0}
          role="slider"
          aria-label="Maximum price"
          aria-valuemin={min}
          aria-valuemax={max}
          aria-valuenow={valueMax}
          onKeyDown={onKeyHandle("hi")}
          onMouseDown={(e) => {
            e.preventDefault();
            setDragging("hi");
          }}
          onTouchStart={() => setDragging("hi")}
          style={{ ...handleStyle(dragging === "hi"), left: `${pctHi}%`, zIndex: 2 }}
        />
      </div>

      <div className="flex items-center justify-between mt-5" style={{ gap: 12 }}>
        <input
          type="text"
          inputMode="numeric"
          value={inputLo}
          onChange={(e) => setInputLo(e.target.value)}
          onBlur={(e) => commitInput("lo", e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") (e.target as HTMLInputElement).blur();
          }}
          style={inputStyle}
          aria-label="Minimum price input"
        />
        <input
          type="text"
          inputMode="numeric"
          value={inputHi}
          onChange={(e) => setInputHi(e.target.value)}
          onBlur={(e) => commitInput("hi", e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") (e.target as HTMLInputElement).blur();
          }}
          style={inputStyle}
          aria-label="Maximum price input"
        />
      </div>
    </div>
  );
};

export default RangeSlider;
