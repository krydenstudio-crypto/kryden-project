import { Link, NavLink } from "react-router-dom";

interface NavMenuType {
  id: number;
  menu: string;
  link: string;
}

const NavMenu = () => {

  const navMenu: NavMenuType[] = [
    {
      id: 1,
      menu: "Hackathon",
      link: "/hackathon"
    },
    {
      id: 2,
      menu: "Team Matchmaking",
      link: "/team-matchmaking"
    },
    {
      id: 3,
      menu: "Social Feed",
      link: "/social-feed"
    },
    {
      id: 4,
      menu: "Incubation",
      link: "/incubation"
    },
    {
      id: 5,
      menu: "Projects",
      link: "/projects"
    },
    {
      id: 6,
      menu: "Investors",
      link: "/investors"
    }
  ]

  return (
    <nav>
      <ul className="lg:flex justify-between items-center lg:gap-5 hidden">
        {
          navMenu.map(nav => {
            const {id, menu, link} = nav;
            return (
              <li key={id}>
                <NavLink to={link} className={({isActive}) => isActive ? 'font-medium text-[13px] lg:text-[16px] text-textFocus' 
                :'font-medium text-[13px] lg:text-[16px] text-text'}>
                  <p>{menu}</p>
                </NavLink>
              </li>
            )
          })
        }
      </ul>
    </nav>
  )
}

export default NavMenu