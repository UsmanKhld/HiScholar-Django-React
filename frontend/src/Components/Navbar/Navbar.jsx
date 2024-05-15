import React from 'react'
import './Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faListCheck, faSchool, faStar, faLandmark, faDollarSign, faGraduationCap, faBriefcase, faBullhorn, faUser } from '@fortawesome/free-solid-svg-icons'

export const Navbar = () => {
  return (
    <div>
      <nav className='sidenav'>
        <ul className='sidenav-nav'>
          <li className='sidenav-item'>
            <a href='/dashboard' className='sidenav-link'>
              <FontAwesomeIcon icon={faHouse} className='sidenav-icons fa-2x' />
              <span className='link-text'>Dashboard</span>
            </a>
          </li>

          <li className='sidenav-item'>
            <a href='/checklist' className='sidenav-link'>
              <FontAwesomeIcon icon={faListCheck} className='sidenav-icons fa-2x' />
              <span className='link-text'>Checklist</span>
            </a>
          </li>

          <li className='sidenav-item'>
            <a href='/counselor' className='sidenav-link'>
              <FontAwesomeIcon icon={faSchool} className='sidenav-icons fa-2x' />
              <span className='link-text'>Counselor</span>
            </a>
          </li>

          <li className='sidenav-item'>
            <a href='/points' className='sidenav-link'>
              <FontAwesomeIcon icon={faStar} className='sidenav-icons fa-2x' />
              <span className='link-text'>Points</span>
            </a>
          </li>

          <li className='sidenav-item'>
            <a href='/financial-aid' className='sidenav-link'>
              <FontAwesomeIcon icon={faLandmark} className='sidenav-icons fa-2x' />
              <span className='link-text'>Financial Aid</span>
            </a>
          </li>

          <li className='sidenav-item'>
            <a href='/scholarships' className='sidenav-link'>
              <FontAwesomeIcon icon={faDollarSign} className='sidenav-icons fa-2x' />
              <span className='link-text'>Scholarships</span>
            </a>
          </li>

          <li className='sidenav-item'>
            <a href='/colleges' className='sidenav-link'>
              <FontAwesomeIcon icon={faGraduationCap} className='sidenav-icons fa-2x' />
              <span className='link-text'>Colleges</span>
            </a>
          </li>

          <li className='sidenav-item'>
            <a href='/careers' className='sidenav-link'>
              <FontAwesomeIcon icon={faBriefcase} className='sidenav-icons fa-2x' />
              <span className='link-text'>Careers</span>
            </a>
          </li>

          <li className='sidenav-item'>
            <a href='/volunteering' className='sidenav-link'>
              <FontAwesomeIcon icon={faBullhorn} className='sidenav-icons fa-2x' />
              <span className='link-text'>Volunteering</span>
            </a>
          </li>

          <li className='sidenav-item'>
            <a href='/profile' className='sidenav-link'>
              <FontAwesomeIcon icon={faUser} className='sidenav-icons fa-2x' />
              <span className='link-text'>Profile</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
    
  )
}

export default Navbar;