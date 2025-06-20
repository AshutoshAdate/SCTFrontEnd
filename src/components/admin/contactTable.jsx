import React, { useEffect, useState } from 'react';
import httpReq from '../../Utilities/httpReq'

const ContactTable = () => {
    const [contacts, setContacts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchContacts = async () => {
            try {
                const res = await httpReq.get("/ContactUs/getallcontactdetails");
                setContacts(res.data);

            } catch (error) {
                console.error('Failed to fetch contacts:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchContacts();
    }, []);

    if (loading) return <p>Loading contacts...</p>;

    return (
        <table className="contact-table">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Message</th>
                </tr>
            </thead>
            <tbody>
                {contacts.map((c, i) => (
                    <tr key={i}>
                        <td data-label="Name">{c.contactName}</td>
                        <td data-label="Email">{c.contactEmail}</td>
                        <td data-label="Message">{c.contactMessage}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default ContactTable;
