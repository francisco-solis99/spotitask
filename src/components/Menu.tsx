import { Link, useLocation } from "react-router-dom";
import { Flex } from "@chakra-ui/react";
import { HomeIcon } from "../components/icons/HomeIcon";
import { ListsIcon } from "../components/icons/ListsIcon";
import { TasksIcon } from "../components/icons/TasksIcon";
import { useEffect, useState } from "react";

export default function Menu() {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState('')

  useEffect(() => {
    setActiveTab(location.pathname)
  }, [location.pathname])


  // console.log("render menu");
  return (
    <aside className="aside__menu">
      <h1>TODOs</h1>
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
  );
}
