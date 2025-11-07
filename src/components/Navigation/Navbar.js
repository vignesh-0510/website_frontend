"use client";
import { useSession } from "next-auth/react";
import Link from "next/link";

import LogoutButton from "./LogoutButton";



export default function Navbar() {
    const { data: session } = useSession();

    return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
			<div className="container">
				<Link className="navbar-brand" href="/">
					My Portfolio
				</Link>

				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarNav"
					aria-controls="navbarNav"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>

				<div className="collapse navbar-collapse" id="navbarNav">
					<ul className="navbar-nav ms-auto">
						<li className="nav-item">
							<Link className="nav-link" href="/">
								Home
							</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" href="/projects">
								Projects
							</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" href="/resume">
								Resume
							</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" href="/education">
								Education
							</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" href="/about">
								About Me
							</Link>
						</li>
						{!session ? (
							<>
								<li className="nav-item">
									<Link className="nav-link" href="/signup">
										Signup
									</Link>
								</li>
								<li className="nav-item">
									<Link className="nav-link" href="/login">
										Login
									</Link>
								</li>
							</>
						) : (
							<li className="nav-item">
								<LogoutButton />
							</li>
						)}
					</ul>
				</div>
			</div>
		</nav>
	);
}