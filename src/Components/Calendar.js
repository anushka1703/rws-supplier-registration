import React, { useState, useEffect, useRef } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { RRule } from "rrule";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Modal from "react-bootstrap/Modal";
import Row from "react-bootstrap/Row";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

//import 'bootstrap/dist/css/bootstrap.min.css';

const localizer = momentLocalizer(moment);

const MyCalendar = () => {
  let [events, setEvents] = useState([]);
  let [curRange, setCurRange] = useState({});
  let [showModal, setShowModal] = useState(false);
  let [curHolList, setCurHolList] = useState([]);
  const hasInitialized = useRef(false);

  const handleClose = () => {
    setShowModal(false);
    setCurHolList([]);
  }

  const setHoliday = (holDate) => {
    const dt = holDate;

    if (events.some((ev) => ev.start.getTime() === dt.getTime())) {
      const checkDate = (ev) => ev.start.getTime() === dt.getTime();
      const index = events.findIndex(checkDate);

      if (index > -1) {
        const updatedEvents = [...events];
        updatedEvents.splice(index, 1);
        setEvents(updatedEvents);
      }
    } else {
      const reqDate = new Date(dt);
      setEvents((prevEvents) => [
        ...prevEvents,
        {
          start: reqDate,
          end: reqDate,
          title: "holiday",
          allDay: true,
        },
      ]);
    }
  };

  const setSundaysAsHolidays = (range) => {
    let startDate = range.start;
    let endDate = range.end;
    setCurRange({ start: startDate, end: endDate });
    const rule = new RRule({
      freq: RRule.WEEKLY,
      byweekday: RRule.SA,
      dtstart: startDate,
      until: endDate,
      tzid: "Asia/Calcutta",
    });

    const sundayDates = rule.all();
    sundayDates.forEach((sunday) => {
      if (!events.some((ev) => ev.start.getTime() === sunday.getTime())) {
        setHoliday(sunday);
      }
    });
  };

  const calculateMonthRange = (currentDate) => {
    const startOfMonth = moment(currentDate).startOf("month").toDate();
    const endOfMonth = moment(currentDate).endOf("month").toDate();
    setCurRange({ start: startOfMonth, end: endOfMonth });
    return { start: startOfMonth, end: endOfMonth };
  };

  // useEffect to run setSundaysAsHolidays on initial render
  useEffect(() => {
    if (!hasInitialized.current) {
      const today = new Date();
      const initialRange = calculateMonthRange(today);
      setSundaysAsHolidays(initialRange);
      hasInitialized.current = true;
    } // Call function for initial render
  }, []); // Empty dependency array to run only on first render

  const handleSave = () => {
    let holList = [];
    for (let i = 0; i < events.length; i++) {
      if (
        curRange.start.getTime() <= events[i].start.getTime() &&
        events[i].start.getTime() <= curRange.end.getTime()
      ) {
        holList.push(new Date(events[i].start));
      }
    }
    holList.sort((a,b) => a-b);
    let stringList = [];
    for (let i = 0; i < holList.length; i++){
      stringList.push(String(holList[i]));
    }
    setCurHolList(stringList);
    setShowModal(true);
  };

  const modalContentRef = useRef();

  const downloadModalAsPDF = () => {
    const content = modalContentRef.current;

    // Capture modal content as a canvas using html2canvas
    html2canvas(content).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");

      // Scale the canvas content to fit A4 size
      const imgWidth = 210; // A4 width in mm
      const pageHeight = 295; // A4 height in mm
      const imgHeight = (canvas.height * imgWidth) / canvas.width;

      pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);
      pdf.save("modal-content.pdf");
    });
  };

  const getFullDayName  = (shortDay) => {
    switch(shortDay){
      case "Sun":
        return ("Sunday");
      case "Mon":
        return("Monday");
      case "Tue":
        return("Tuesday");
      case "Wed":
        return("Wednesday");
      case "Thu":
        return("Thursday");
      case "Fri":
        return("Friday");
      case "Sat":
        return("Saturday");
    }
  }

  return (
    <div className="full-page">
      <h1 className="navbar-page-heading">Holiday Calendar</h1>
      <div className="calendar-div">
      <Calendar
        selectable
        localizer={localizer}
        events={events}
        defaultView="month"
        style={{ height: 500 }}
        onSelectSlot={(SlotInfo) => setHoliday(SlotInfo.start)} // Manually set a holiday on a selected date
        onRangeChange={(range) => setSundaysAsHolidays(range)}
      />
      </div>
      <div className="form-footer">
      <button onClick={handleSave}>Save</button>
      </div>
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Saved Holidays</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div ref={modalContentRef}>
            <Container>
              <Row>
                <Col xs={6} md={4}>
                  S.No.
                </Col>
                <Col xs={6} md={4}>
                  Day
                </Col>
                <Col xs={6} md={4}>
                  Date
                </Col>
                <hr />
              </Row>
              {curHolList.map((hol, idx) => (
                <Row>
                  <Col xs={6} md={4}>
                    {idx + 1}
                  </Col>
                  <Col xs={6} md={4}>
                    {getFullDayName(hol.slice(0, 3))}
                  </Col>
                  <Col xs={6} md={4}>
                    {hol.slice(4, 15)}
                  </Col>
                </Row>
              ))}
            </Container>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={downloadModalAsPDF}>
            Download as PDF
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default MyCalendar;
