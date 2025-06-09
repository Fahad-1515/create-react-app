import React, { useState } from "react";
import BookingForm from "./components/BookingForm";
import "./App.css";

function App() {
  const [confirmed, setConfirmed] = useState(false);

  return (
    <main className="App">
      <header>
        <h1>🍋 Little Lemon Table Booking</h1>
      </header>
      {!confirmed ? (
        <BookingForm onSubmit={() => setConfirmed(true)} />
      ) : (
        <h2>Reservation Confirmed!</h2>
      )}
    </main>
  );
}

export default App;
