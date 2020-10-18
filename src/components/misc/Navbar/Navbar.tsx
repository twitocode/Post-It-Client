import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.scss';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../../fire';

export const Navbar: FC = () => {
	const [user] = useAuthState(auth);

	return (
		<div className='bar'>
			<div className='container'>
				<div className='flex'>
					<div className='flex nav-brand'>
						<h1 className='heading'>Post-It</h1>
					</div>
					<div className='flex nav-links'>
						<Link to='/' className='link'>
							Home
						</Link>
						<Link to='/posts' className='link'>
							Posts
						</Link>
						<Link to='/account' className='link'>
							Account
						</Link>
					</div>
					<div className='empty'>{!user && <button>Sign Up</button>}</div>
				</div>
			</div>
		</div>
	);
};