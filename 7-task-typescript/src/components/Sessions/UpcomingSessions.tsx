/** @format */

import { useEffect, useRef } from "react";

import Modal, { type ModalHandle } from "../Ui/Modal.tsx";
import UpcomingSession from "./UpcomingSession.tsx";
import { useSessionsContext } from "../../store/sessions-context.tsx";
import Button from "../Ui/Button.tsx";

type UpcomingSessionsProps = {
  onClose: () => void;
};

export default function UpcomingSessions({ onClose }: UpcomingSessionsProps) {
  const modal = useRef<ModalHandle>(null);
  const { cancelSession, upcomingSessions } = useSessionsContext();

  useEffect(() => {
    if (modal.current) {
      modal.current.open();
    }
  }, []);

  function handleCancelSession(sessionId: string) {
    cancelSession(sessionId);
  }

  const hasSessions = upcomingSessions.length > 0;

  return (
    <Modal ref={modal} onClose={onClose}>
      <h2>Upcoming Sessions</h2>
      {hasSessions && (
        <ul>
          {upcomingSessions.map((session) => (
            <li key={session.id}>
              <UpcomingSession
                session={session}
                onCancel={() => handleCancelSession(session.id)}
              />
            </li>
          ))}
        </ul>
      )}
      {!hasSessions && <p>No upcoming sessions.</p>}
      <p className='actions'>
        <Button onClick={onClose}>Close</Button>
      </p>
    </Modal>
  );
}
