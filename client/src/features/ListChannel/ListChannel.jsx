import React, { useState } from 'react';
import { FcFolder, FcBriefcase, FcCollaboration } from 'react-icons/fc';

import './ListChannel.scss';
import { AiOutlinePlus } from 'react-icons/ai';

const Listchannel = () => {
  const [workspace, setWorkspace] = useState([
    'Project Ideas',
    'Confirm Content',
    'Waiting for review',
  ]);
  const [team, setTeam] = useState(['Developers', 'Designer']);
  const [others, setOthers] = useState(['Off-Topic', 'Archive']);

  const [members, setMembers] = useState([
    'Dang Khoa',
    'Huu Thang',
    'Chanh Nhut',
    'Phu Nguyen',
    'Tuong Minh',
  ]);

  const addWorkSpace = (key) => {
    switch (key) {
      case 'workspace':
        setWorkspace();
        break;

      default:
        break;
    }
  };

  const renderModal = (channel) => {};

  return (
    <>
      {/* <div className="create-new">
        <div className="create-new__content">
          <div className="create-new__content__title">
            <h5>Create new channel</h5>
            <i>In somewhere </i>
          </div>
          <div className="create-new__content__member">
            <h5>MEMBER</h5>
            <div>
              {members.map((member) => {
                return <input type="radio" name="member" value={member} />;
              })}
            </div>
          </div>
          <div className="create-new__content__name">
            <h5>Name's channel</h5>
            <input type="text" />
          </div>
          <div className="create-new__content__footer">
            <button className="create-new__content__btn create-new__content__btn--cancle">
              Cancle
            </button>
            <button className="create-new__content__btn create-new__content__btn--confirm">
              Confirm
            </button>
          </div>
        </div>
      </div> */}
      <div className="list-channel">
        <ul className="list-channel__group">
          <div className="list-channel__group__title">
            <section>
              <FcBriefcase />
              <h5>WORKSPACE</h5>
            </section>
            <AiOutlinePlus className="add" />
          </div>
          {workspace.map((x) => {
            return (
              <li className="list-channel__group__btn">
                <a href="#">{x}</a>
              </li>
            );
          })}
        </ul>
        <ul className="list-channel__group">
          <div className="list-channel__group__title">
            <section>
              <FcCollaboration />
              <h5>TEAMS</h5>
            </section>
            <AiOutlinePlus className="add" />
          </div>
          {team.map((x) => {
            return (
              <li className="list-channel__group__btn">
                <a href="#">{x}</a>
              </li>
            );
          })}
        </ul>
        <ul className="list-channel__group">
          <div className="list-channel__group__title">
            <section>
              <FcFolder />
              <h5>OTHERS</h5>
            </section>
            <AiOutlinePlus className="add" />
          </div>
          {others.map((x) => {
            return (
              <li className="list-channel__group__btn">
                <a href="#">{x}</a>
              </li>
            );
          })}
        </ul>
        <div className="btn-add-channel">
          <AiOutlinePlus />
        </div>
      </div>
    </>
  );
};

export default Listchannel;
