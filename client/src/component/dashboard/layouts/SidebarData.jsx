import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as MdIcons from 'react-icons/md';
import * as GiIcons from 'react-icons/gi';

export const SidebarData = [
    
  {
    title: 'dashboard',
    path: '/dashboard',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  
  {
    title: 'About',
    path: '/dashboard/demo',
    icon: <MdIcons.MdRoundaboutRight
     />,
    cName: 'nav-text'
  },
  {
    title: 'Ambulance',
    path: '/dashboard/ambulance',
    icon: <MdIcons.MdRoundaboutRight
     />,
    cName: 'nav-text'
  },
  {
    title: 'Nearest Hospital',
    path: '/dashboard/nearesthospital',
    icon: <MdIcons.MdRoundaboutRight
     />,
    cName: 'nav-text'
  },
  {
    title: 'Notification',
    path: '/dashboard/notification',
    icon: <MdIcons.MdRoundaboutRight
     />,
    cName: 'nav-text'
  },


 
];
