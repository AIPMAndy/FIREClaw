import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import UserStatus from './UserStatus'

interface NavigationProps {
  currentPath?: string
}

const Navigation: React.FC<NavigationProps> = () => {
  const location = useLocation()
  
  const navItems = [
    { path: '/', label: '首页' },
    { path: '/fire-calculator', label: 'FIRE计算器' },
    { path: '/investment-planner', label: '投资组合' },
    { path: '/income-strategy', label: '收入策略' },
    { path: '/community', label: 'FIRE社区' }
  ]

  return (
    <nav className="apple-nav">
      <div className="apple-nav-content">
        <Link to="/" className="apple-nav-logo">
          FIREClaw
        </Link>
        <div className="apple-nav-links">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`apple-nav-link ${location.pathname === item.path ? 'active' : ''}`}
            >
              {item.label}
            </Link>
          ))}
        </div>
        <div className="apple-nav-actions">
          <UserStatus />
        </div>
      </div>
    </nav>
  )
}

export default Navigation