import { useState } from 'react';
import './signIn.css';

function SignIn() {
    const [email, setEmail] = useState('');
    const [signedInEmail, setSignedInEmail] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        setSignedInEmail(email.trim());
    };

    return (
        <main className="account-page">
            <a className="account-logo" href="/">NET<span>FILM</span></a>
            <a className="account-home-link" href="/">Back to home</a>
            <section className="account-card" aria-labelledby="signin-title">
                <p className="account-eyebrow">WELCOME BACK</p>
                <h1 id="signin-title">Sign in</h1>
                <p className="account-description">Sign in to continue exploring movies and bookings.</p>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="signin-email">Email address</label>
                    <input
                        id="signin-email"
                        type="email"
                        autoComplete="email"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                        placeholder="you@example.com"
                        required
                    />
                    <label htmlFor="signin-password">Password</label>
                    <input
                        id="signin-password"
                        type="password"
                        autoComplete="current-password"
                        placeholder="Enter your password"
                        required
                    />
                    <button type="submit">Sign in</button>
                </form>
                {signedInEmail && (
                    <p className="account-notice" role="status" aria-live="polite">
                        sign-in complete for {signedInEmail}
                    </p>
                )}
            </section>
        </main>
    );
}

export default SignIn;
