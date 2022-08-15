import React from 'react';
import './Conference.scss';
import { Window } from "../components/Window";

export function Conference() {
  return (
    <div className="conference">
      <div className="conference__main-window">
        <div className="card">
          <div className="conference__header">
            <div className="conference__title">New Conference</div>
          </div>
          <Window clientid={1} />
        </div>
      </div>
      <div className="conference__column">
        <div className="conference__other-windows card">
          <Window clientid={2} />
          <Window clientid={3} />
          <Window clientid={4} />
          <Window clientid={5} />
          <Window clientid={6} />
          <Window clientid={7} />
          <Window clientid={8} />
        </div>
      </div>
      <div className="tabs tabs_right">
        <div className="tabs__item tabs__item_active">All users</div>
      </div>
    </div>
  );
}
