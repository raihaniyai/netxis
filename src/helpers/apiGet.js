import { useState, useEffect } from 'react';

const useCustomFetcher = ({ resourceURL = {} }) => {
  const [result, setResult] = useState({ loading: true, returnData: null });

  useEffect(() => {
    if (!result.returnData) {
      fetch(resourceURL)
      .then(res => res.json())
      .then(
        (result) => {
          setResult({ loading: false, returnData: result });
        }
      )
    }
    // dependency list eslint is being disabled to prevent recalling the same API
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [result.returnData]);

  const refetch = () => {
    setResult({ loading: true, returnData: null });
  };

  return { loading: result.loading, returnData: result.returnData, refetch };
};

export const useFetchServiceData = service => {
  const resourceURL = new URL(`https://netxis-server.azurewebsites.net/${service}/service`);
  const { returnData = {}, loading } = useCustomFetcher({ resourceURL });

  if (!loading) { const success = returnData.success || [];
    if (!success) {
      const errorAPI = returnData.messageError[0] || ``;
      console.error(errorAPI);

      return {
        loading,
        isError: true,
        messageError: errorAPI,
      };
    }

    const { data } = returnData || {};
    const { service } = data || {};

    return {
      response: service,
      loading,
    };
  }

  return {
    loading,
  };
};

export const useFetchCompanyData = service => {
  const resourceURL = new URL(`https://netxis-server.azurewebsites.net/${service}/company`);
  const { returnData = {}, loading } = useCustomFetcher({ resourceURL });

  if (!loading) { const success = returnData.success || [];
    if (!success) {
      const errorAPI = returnData.messageError[0] || ``;
      console.error(errorAPI);

      return {
        loading,
        isError: true,
        messageError: errorAPI,
      };
    }

    const { data } = returnData || {};
    const { company } = data || {};

    return {
      response: company,
      loading,
    };
  }

  return {
    loading,
  };
};

export const useFetchProductData = service => {
  const resourceURL = new URL(`https://netxis-server.azurewebsites.net/${service}/product`);
  const { returnData = {}, loading } = useCustomFetcher({ resourceURL });

  if (!loading) { const success = returnData.success || [];
    if (!success) {
      const errorAPI = returnData.messageError[0] || ``;
      console.error(errorAPI);

      return {
        loading,
        isError: true,
        messageError: errorAPI,
      };
    }

    const { data } = returnData || {};
    const { plan } = data || {};

    return {
      response: plan,
      loading,
    };
  }

  return {
    loading,
  };
};
