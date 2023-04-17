import React from 'react'

const Layout = ({children}) => {
  return (
    <div className='py-10 dark:bg-slate-900 bg-emerald-100 h-screen'>
        {children} 
    </div>
  ) 
}

export default Layout