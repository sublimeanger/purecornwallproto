import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import SectionHeading from "./SectionHeading";

const daysOfWeek = ["S", "M", "T", "W", "T", "F", "S"];

const generateMonth = (year: number, month: number) => {
  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const weeks: (number | null)[][] = [];
  let week: (number | null)[] = Array(firstDay).fill(null);

  for (let d = 1; d <= daysInMonth; d++) {
    week.push(d);
    if (week.length === 7) {
      weeks.push(week);
      week = [];
    }
  }
  if (week.length > 0) {
    while (week.length < 7) week.push(null);
    weeks.push(week);
  }
  return weeks;
};

const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"];

// Sample booked dates
const bookedDates = new Set([5, 6, 7, 12, 13, 14, 19, 20, 21, 26, 27, 28]);

const MonthCalendar = ({ year, month }: { year: number; month: number }) => {
  const weeks = generateMonth(year, month);
  return (
    <div>
      <p className="text-center mb-4" style={{ fontSize: 16, color: "#3a3a3a", fontFamily: "'Jost', sans-serif" }}>
        {monthNames[month]} {year}
      </p>
      <div className="grid grid-cols-7 gap-1">
        {daysOfWeek.map((d, i) => (
          <div key={i} className="text-center" style={{ fontSize: 12, color: "#7a7a7a", paddingBottom: 8 }}>
            {d}
          </div>
        ))}
        {weeks.flat().map((day, i) => {
          if (day === null) return <div key={i} style={{ aspectRatio: "1", backgroundColor: "#fafaf8" }} />;
          const booked = bookedDates.has(day);
          return (
            <div
              key={i}
              className="flex items-center justify-center cursor-pointer transition-colors"
              style={{
                aspectRatio: "1",
                backgroundColor: booked ? "#d3a36e" : "white",
                color: booked ? "white" : "#3a3a3a",
                fontSize: 14,
                fontWeight: booked ? 400 : 500,
              }}
            >
              {day}
            </div>
          );
        })}
      </div>
    </div>
  );
};

const PricingSection = () => {
  const [startMonth, setStartMonth] = useState(3); // April
  const year = 2026;

  return (
    <section id="pricing" style={{ paddingTop: "5vw", paddingBottom: "5vw", backgroundColor: "#f7f5f2" }}>
      <div className="pc-container">
        <SectionHeading title="Pricing & Availability" />

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2.5fr_1fr] gap-10 mt-12">
          {/* Left info */}
          <div className="flex flex-col gap-4">
            <p style={{ fontSize: 15, color: "#3a3a3a", lineHeight: 1.6 }}>
              <strong style={{ fontWeight: 500 }}>Treleigh</strong> is available weekly from a Monday.
            </p>
            <p style={{ fontSize: 14, color: "#7a7a7a", lineHeight: 1.6 }}>
              Other arrival dates and short breaks may also be available out of peak time.
            </p>
            <p style={{ fontSize: 14, color: "#7a7a7a", lineHeight: 1.6 }}>
              Please click on your arrival date in bold from the calendars to make your online booking.
            </p>
            <div className="mt-6" style={{ borderTop: "1px solid #e5e0da", paddingTop: 16 }}>
              <p style={{ fontSize: 13, color: "#7a7a7a", lineHeight: 1.6 }}>
                <strong style={{ fontWeight: 500, color: "#3a3a3a" }}>Booking fee:</strong> There is a non-refundable booking fee of £35 per booking.
              </p>
              <p style={{ fontSize: 13, color: "#7a7a7a", lineHeight: 1.6, marginTop: 8 }}>
                <strong style={{ fontWeight: 500, color: "#3a3a3a" }}>Damage deposit:</strong> A refundable damage deposit of £500 is payable.
              </p>
              <p style={{ fontSize: 12, color: "#7a7a7a", marginTop: 12, fontStyle: "italic" }}>
                NB. All bookings are subject to our Terms and Conditions.
              </p>
            </div>
          </div>

          {/* Centre calendars */}
          <div>
            {/* Legend */}
            <div className="flex items-center justify-center gap-6 mb-6">
              <div className="flex items-center gap-2">
                <div style={{ width: 16, height: 16, backgroundColor: "white", border: "1px solid #e5e0da" }} />
                <span style={{ fontSize: 12, color: "#7a7a7a", textTransform: "uppercase", letterSpacing: 2 }}>Available</span>
              </div>
              <div className="flex items-center gap-2">
                <div style={{ width: 16, height: 16, backgroundColor: "#d3a36e" }} />
                <span style={{ fontSize: 12, color: "#7a7a7a", textTransform: "uppercase", letterSpacing: 2 }}>Booked</span>
              </div>
            </div>

            {/* Nav */}
            <div className="flex justify-between items-center mb-6">
              <button
                onClick={() => setStartMonth((m) => Math.max(0, m - 2))}
                className="flex items-center gap-1 transition-colors hover:opacity-70"
                style={{ fontSize: 13, color: "#d3a36e", textTransform: "uppercase", letterSpacing: 2, background: "none", border: "none", cursor: "pointer" }}
              >
                <ChevronLeft size={16} /> Previous
              </button>
              <button
                onClick={() => setStartMonth((m) => Math.min(10, m + 2))}
                className="flex items-center gap-1 transition-colors hover:opacity-70"
                style={{ fontSize: 13, color: "#d3a36e", textTransform: "uppercase", letterSpacing: 2, background: "none", border: "none", cursor: "pointer" }}
              >
                Next <ChevronRight size={16} />
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <MonthCalendar year={year} month={startMonth} />
              <MonthCalendar year={year} month={startMonth + 1} />
            </div>

            <div
              className="mt-6 text-center py-3"
              style={{ backgroundColor: "#d3a36e", color: "white", fontSize: 13, letterSpacing: 1 }}
            >
              Click on an arrival date highlighted in bold to begin your booking.
            </div>
          </div>

          {/* Right info */}
          <div className="flex flex-col gap-4">
            <p style={{ fontSize: 14, color: "#3a3a3a", lineHeight: 1.6 }}>
              Short breaks or alternative arrival dates may also be available.
            </p>
            <p style={{ fontSize: 14, color: "#7a7a7a", lineHeight: 1.6 }}>
              Please Submit an Enquiry below…
            </p>
            <button
              className="mt-4 transition-all duration-300 hover:bg-sandy-gold hover:text-white"
              style={{
                background: "transparent",
                border: "1px solid #d3a36e",
                color: "#d3a36e",
                fontFamily: "'Jost', sans-serif",
                fontSize: 13,
                textTransform: "uppercase",
                letterSpacing: 3,
                padding: "14px 32px",
                cursor: "pointer",
              }}
            >
              Submit an Enquiry
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
