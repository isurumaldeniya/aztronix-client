const links = [
  { id: 1, url: '/', text: 'home' },
  { id: 2, url: 'dashboard', text: 'dashboard' },
  { id: 3, url: 'org', text: 'organization' },
  { id: 4, url: 'profile', text: 'User Profile' },
  { id: 5, url: 'about', text: 'about' },
];
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

const NavLinks = () => {
  const user = useSelector((state) => state.userState.user);

  return (
    <>
      {links.map((link) => {
        const { id, url, text } = link;

        if((url === 'dashboard' || url === 'org' || url === 'profile') && !user) return null;
        return (
          <li key={id}>
            <NavLink className="capitalize" to={url}>
              {text}
            </NavLink>
          </li>
        );
      })}
    </>
  );
};
export default NavLinks;
