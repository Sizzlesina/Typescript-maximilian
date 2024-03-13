/** @format */

type UpcomingSesionsProps = {
  onClose: () => void;
};

function UpcomingSession({ onClose }: UpcomingSesionsProps) {
  return <div onClick={onClose}>Sina</div>;
}

export default UpcomingSession;
