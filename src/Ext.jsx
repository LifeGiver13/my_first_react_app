function Navigation() {
    return (
        <>
            <div class="row">

                <nav class="navbar navbar-expand-lg   px-3">
                    <div class="container-fluid">
                        <a class="navbar-brand" href="{{ url_for('novel_list') }}">
                            <svg width="150" height="60" viewBox="0 10 400 60" xmlns="http://www.w3.org/2000/svg">
                                <rect width="400" height="100" fill="#1e1e2e" rx="10" />
                                <g transform="translate(20,20)">
                                    <rect x="10" y="10" width="40" height="60" fill="#f5deb3" stroke="#8b5a2b"
                                        stroke-width="3" rx="5" />
                                    <circle cx="10" cy="20" r="7" fill="#8b5a2b" />
                                    <circle cx="50" cy="20" r="7" fill="#8b5a2b" />
                                    <circle cx="10" cy="70" r="7" fill="#8b5a2b" />
                                    <circle cx="50" cy="70" r="7" fill="#8b5a2b" />
                                    <line x1="10" y1="20" x2="50" y2="20" stroke="#8b5a2b" stroke-width="3" />
                                    <line x1="10" y1="70" x2="50" y2="70" stroke="#8b5a2b" stroke-width="3" />
                                </g>
                                <text x="80" y="60" font-family="'Georgia', serif" font-size="50" fill="#f5deb3"
                                    font-weight="bold">
                                    Scroll Saga
                                </text>
                            </svg>
                        </a>

                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                            aria-label="Toggle navigation">
                            <span>
                                <svg width="30" height="30" viewBox="0 0 100 80" fill="currentColor"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <rect width="100" height="20"></rect>
                                    <rect y="30" width="100" height="20"></rect>
                                    <rect y="60" width="100" height="20"></rect>
                                </svg>
                            </span>
                        </button>

                        <div class="collapse navbar-collapse" id="navbarNav">
                            <ul class="navbar-nav ms-auto align-items-lg-center gap-2">
                                <li class="nav-item"><a href="{{ url_for('novel_list') }}">Home</a>
                                </li>
                                <li class="nav-item"><a href="{{ url_for('show_page', slug='about') }}">About</a>
                                </li>
                                <li class="nav-item"><a
                                    href="{{ url_for('show_page', slug='trending') }}">Trending</a>
                                </li>
                                <li class="nav-item"><a
                                    href="{{ url_for('show_page', slug='discovery') }}">Discovery</a>
                                </li>
                                <li class="nav-item"><a href="{{ url_for('show_page', slug='saga_news') }}">Saga
                                    News</a>
                                </li>

                                <div class="d-flex gap-2">
                                    <a class="btn btn-dark" data-bs-toggle="modal"
                                        data-bs-target="#loginModal">Login</a>
                                    <a class="btn btn-light" data-bs-toggle="modal"
                                        data-bs-target="#registerModal">Register</a>

                                </div>




                            </ul>
                        </div>
                    </div>
                </nav>
            </div>

        </>
    );

}