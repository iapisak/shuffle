export default function SideNav () {
    const sidebar = {
        position: 'fixed',
        top: '0',
        bottom: '0',
        left: '0',
        'zndex': '100',
        padding: '48px 0 0',
        'box-shadow': 'inset -1px 0 0 rgb(0 0 0 / 10%)'}

    return (
        <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-light collapse sidebar" 
            sytle={ {sidebar} }>
            <div className="position-sticky pt-3">
                <ul className="nav flex-column">
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="/">
                        New Released
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/">
                        Orders
                        </a>
                    </li>
                </ul>

                <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
                <span>Saved Tracks</span>
                <a className="link-secondary" href="/" aria-label="Add a new report">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-plus-circle"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line></svg>
                </a>
                </h6>
                <ul className="nav flex-column mb-2">
                    <li className="nav-item">
                        <a className="nav-link" href="/">
                        Current month
                        </a>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link" href="/">
                        Year-end sale
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}