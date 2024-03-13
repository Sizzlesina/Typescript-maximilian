/** @format */

import Modal from "../Ui/Modal";

type UpcomingSesionsProps = {
  onClose: () => void;
};

function UpcomingSession({ onClose }: UpcomingSesionsProps) {
  return (
    <Modal onClose={onClose}>
      <h2>Upcoming Sessions</h2>
      <ul></ul>
    </Modal>
  );
}

export default UpcomingSession;
