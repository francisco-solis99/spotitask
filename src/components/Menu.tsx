import { Link, useLocation } from "react-router-dom";
import { Flex } from "@chakra-ui/react";
import { HomeIcon } from "../components/icons/HomeIcon";
import { ListsIcon } from "../components/icons/ListsIcon";
import { TasksIcon } from "../components/icons/TasksIcon";
import { forwardRef, useEffect, useState } from "react";

const Menu = forwardRef(function ({ closeCb }: { closeCb: Function }, ref: any) {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState('')


  useEffect(() => {
    setActiveTab(location.pathname)
  }, [location.pathname])

  // console.log("render menu");
  return (
    <aside className="aside__menu" ref={ref}>
      <button className="menu__close" onClick={() => closeCb()}>
        <svg xmlns="http://www.w3.org/2000/svg" width="1.15em" height="1.15em" viewBox="0 0 24 24"><path fill="currentColor" d="M6.4 19L5 17.6l5.6-5.6L5 6.4L6.4 5l5.6 5.6L17.6 5L19 6.4L13.4 12l5.6 5.6l-1.4 1.4l-5.6-5.6z" /></svg>
      </button>
      <h1 style={{ marginBlock: '2em', textAlign: 'center' }}>TODOs</h1>
      <nav>
        <ul style={{ display: 'grid', gap: '2em' }}>
          <li style={{ transition: 'background ease-in 200ms', background: `${activeTab === '/' ? 'teal' : 'transparent'}`, padding: '.25em', borderRadius: '.25em' }}>
            <Link to="/">
              <Flex gap={'.25em'} fontSize={'1em'}>
                <HomeIcon />
                <span>Home</span>
              </Flex>
            </Link>
          </li>
          <li style={{ transition: 'background ease-in 200ms', background: `${activeTab === '/tasks' ? 'teal' : 'transparent'}`, padding: '.25em', borderRadius: '.25em' }}>
            <Link to="/tasks">
              <Flex gap={'.25em'} fontSize={'1em'}>
                <TasksIcon />
                <span>Tasks</span>
              </Flex>
            </Link>
          </li>
          <li style={{ transition: 'background ease-in 200ms', background: `${activeTab === '/lists' ? 'teal' : 'transparent'}`, padding: '.25em', borderRadius: '.25em' }}>
            <Link to="/lists">
              <Flex gap={'.25em'} fontSize={'1em'}>
                <ListsIcon />
                <span>Lists</span>
              </Flex>
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  )
});

export default Menu;