import React from 'react';
import { Link } from 'react-router';

const ErrorPage = () => {
    return (
        <div style={styles.container}>
            <div style={styles.card}>
                <h1 style={styles.errorCode}>404</h1>
                <h2 style={styles.title}>দুঃখিত, পেজটি পাওয়া যায়নি!</h2>
                <p style={styles.message}>
                    আপনি যে ইউআরএল (URL) টি খুঁজছেন সেটি হয়তো ভুল অথবা পেজটি সরিয়ে ফেলা হয়েছে।
                </p>
                <Link to="/" style={styles.button}>
                    মূল পাতায় ফিরে যান
                </Link>
            </div>
        </div>
    );
};

// স্টাইল অবজেক্ট
const styles = {
    container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        backgroundColor: '#f3f4f6',
        fontFamily: 'Arial, sans-serif',
        padding: '20px'
    },
    card: {
        textAlign: 'center',
        backgroundColor: '#ffffff',
        padding: '40px 30px',
        borderRadius: '12px',
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        maxWidth: '450px',
        width: '100%'
    },
    errorCode: {
        fontSize: '96px',
        fontWeight: '900',
        color: '#059669', // Emerald Green কালার (কৃষি ও লাইভস্টক সাইটের সাথে মিল রেখে)
        margin: '0 0 10px 0',
        letterSpacing: '2px'
    },
    title: {
        fontSize: '24px',
        color: '#1f2937',
        margin: '0 0 10px 0',
        fontWeight: '700'
    },
    message: {
        fontSize: '16px',
        color: '#4b5563',
        lineHeight: '1.6',
        margin: '0 0 25px 0'
    },
    button: {
        display: 'inline-block',
        padding: '12px 24px',
        backgroundColor: '#059669',
        color: '#ffffff',
        textDecoration: 'none',
        fontWeight: '600',
        borderRadius: '6px',
        transition: 'background-color 0.2s',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
    }
};

export default ErrorPage;