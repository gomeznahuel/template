export const nav = ({ label, link }) => {
  return (
    <li>
      <a href={link}>{label}</a>
    </li>
  );
};
