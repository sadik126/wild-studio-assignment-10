import React from 'react';

const Blog = () => {
    return (
        <div>
            <h1 className='text-center'>This is Blog</h1>
            <h2 className='text-danger'>Difference between authorization and authentication</h2>

            <h3>Authentication is the process of verifying who are the user. When a user login to a website with a user name and password user were authenticating.

            </h3>
            <h3>Authorization is the process of verifying that the user have access to something. Gaining access to a resource because the permissions configured on it allows a user access is authorization</h3>

            <h2 className='text-danger'>Why are you using firebase? What other options do you have to implement authentication?</h2>

            <h3>Hence, Firebase is a less technical and time-saving alternative to writing full-fledged backend code for dynamic apps and website.

                a user might also want to consider leveraging this tool if user eventually wish to host and manage app/website in the cloud. Being serverless, Firebase removes the need to worry about the technicalities of cloud server configuration.

                As a Google Cloud service, it also give the access to other Google products and features, like Google Drive and Sheets. For instance, user can import dummy data from Google Sheets and use it temporarily to serve website.</h3>

            <h2 className='text-danger'>What other services does firebase provide other than authentication?</h2>
            <h3>Firebase Realtime Database was the first product to occur under the flag of Firebase. Realtime Database is essentially a NoSQL cloud-storage that can be connected with the application to provide real time access to the data across different ways. One of the advantages is that the database can work offline, caching the data in device memory, and after reconnecting to the internet, synchronizing it.</h3>

            <h3>Cloud Storage: Cloud Storage is basically a Google Cloud for in-app user generated content, like photo, audio, or video files.</h3>

            <h3>Firebase Authentication is a Google Authentication feature tailored for apps using Firebase. It allows a user to use pre-built or create custom UI for user-authentication, and login users via custom credentials, emails, or social media.</h3>

            <h3>Hosting service. If a user are building a web-app, progressive web app, or mobile landing page, user should definitely need hosting. Firebase offers static web hosting for applications built with HTML, CSS, and JavaScript. In terms of security, it uses standard HTTPS and SSL protocols to deliver files and other types of data.</h3>




        </div>
    );
};

export default Blog;