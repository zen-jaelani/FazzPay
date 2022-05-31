import React from "react";
import Router from "next/router";
import cookies from "next-cookies";

const login = "/login";

const privateRoute = (WrappedComponent) => {
  const hocComponent = ({ ...props }) => <WrappedComponent {...props} />;

  hocComponent.getInitialProps = async (context) => {
    let dataCookie = cookies(context);
    if (!dataCookie?.token) {
      if (context.res) {
        context.res?.writeHead(302, {
          Location: login,
        });
        context.res?.end();
      } else {
        Router.replace(login);
      }
    } else if (WrappedComponent.getInitialProps) {
      const wrappedProps = await WrappedComponent.getInitialProps({
        ...context,
        auth: dataCookie,
      });
      return { ...wrappedProps, dataCookie };
    }

    return { dataCookie };
  };

  return hocComponent;
};

export default privateRoute;
