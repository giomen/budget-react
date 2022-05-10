import React from 'react'

interface HeaderProps {
  title: string;
  amount: number;
}

const Header = (props: HeaderProps) =>  {
  const {title, amount} = props
  return (
    <div className="header">
      <div className="title">{title}</div>
      <div className="amount">{amount}</div>
    </div>
  )
}

export default Header
