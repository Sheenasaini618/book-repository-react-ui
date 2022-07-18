import { Typography } from '@mui/material';
import React from 'react';
import { getAuditresults } from '../util/api/bookApi';

function Audit() {

  const [auditList, setauditList] = React.useState([])

  React.useEffect(() => {
    getAuditresults()
      .then((res) => {
        return res.json();
      })
      .then((result) => {
        setauditList(result)
      });
  }, [])


  return (
    <div>
      {auditList.map(audit => {
        return (<Typography variant='h6'>
          {audit}
        </Typography>
        )
      })}
    </div>
  );
}

export default Audit;
