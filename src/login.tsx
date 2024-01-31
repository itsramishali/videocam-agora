// import { connect } from 'react-redux';
// import React, { Component, Dispatch } from 'react';S
// import https, { RequestOptions } from 'https';

// type Props = {
//   dispatch: Dispatch;
// };

// type State = {};

// class YourComponent extends Component<Props, State> {
//   state = {};

//   componentDidMount() {
//     // HTTP Request
//     const customerKey = "Your customer ID";
//     const customerSecret = "Your customer secret";
//     const plainCredential = `${customerKey}:${customerSecret}`;
//     const encodedCredential = Buffer.from(plainCredential).toString('base64');
//     const authorizationField = `Basic ${encodedCredential}`;

//     const options: RequestOptions = {
//       hostname: 'api.agora.io',
//       port: 443,
//       path: '/dev/v1/projects',
//       method: 'GET',
//       headers: {
//         'Authorization': authorizationField,
//         'Content-Type': 'application/json',
//       },
//     };

//     const req = https.request(options, (res) => {
//       console.log(`Status code: ${res.statusCode}`);

//       res.on('data', (d) => {
//         process.stdout.write(d);
//         // Handle the response data as needed
//       });
//     });

//     req.on('error', (error) => {
//       console.error(error);
//     });

//     req.end();
//   }

//   render() {
//     return (
//       <div>
//         {/* Your component's UI */}
//       </div>
//     );
//   }
// }

// const mapStateToProps = (state: RootState) => ({});

// const mapDispatchToProps = {};

// export default connect(mapStateToProps, mapDispatchToProps)(YourComponent);

// // Assuming RootState is defined in another part of your code
// type RootState = {
//   // Define your Redux state types here
// };
