import React from 'react';
import SidebarItem from '../sidebar-item/sidebar-item';
import './sidebar-style';

export default props => {
  let { sectionName, pages, currentPage, version } = props;

  return (
    <nav className="sidebar">
      <div className="sidebar__inner">
        <h3 className="sidebar--item">Version 2.1</h3>
        <SidebarItem 
          url={ `/${sectionName}` } 
          title="Introduction"
          currentPage= { currentPage }
        />
        {
          pages.map(({ url, title, anchors }, i) =>
            <SidebarItem
              key={ `sidebar-item-${i}` }
              index={i}
              url={ `/${url}` }
              title={ title }
              anchors={ anchors }
              currentPage= { currentPage }
            />
          )
        }
      </div>
    </nav>
  );
};
