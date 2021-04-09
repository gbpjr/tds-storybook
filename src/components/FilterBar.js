import React, { useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { Grid, Paper, IconButton, Chip } from '@material-ui/core';
import FilterListIcon from '@material-ui/icons/FilterList';

const useStyles = makeStyles((theme) => ({
  filterBar: {
    padding: theme.spacing(1),    
    display: 'flex',
    boxShadow: '1px solid #fafafa',
    borderRadius: '0px',
    fontFamily: 'roboto'
  },
  filters: {
    marginLeft: theme.spacing(1),
  }
}));

export default function FilterBar() {
  // const filters = [
  //   'Empresa',
  //   'Ativo'
  // ]

  const classes = useStyles();

  const [filters, setFilters] = React.useState(['Empresa', 'Ativo'])

  const removeFilter = (value) => {
    let modifiedFilters = filters.filter(item => item !== value)
    setFilters(modifiedFilters)
  }

  const handleFilters = () => {
    setFilters(['Empresa', 'Ativo'])
  }

  return (
    <div>
      <Grid item xs={12}>
        <Paper className={classes.filterBar}>
          <Grid align='center'
            container
            alignItems='center'
          >
            <IconButton color='primary' type='button' variant='outlined' onClick={() => {}}>
              <FilterListIcon/>
            </IconButton>
            {
              filters ?  
              <div>
                {
                  filters.map((filter) => {
                    return <Chip label={filter} className={classes.filters} color='primary' onDelete={() => { removeFilter(filter) }}></Chip>
                  })
                }
              </div>: 
              <div className={classes.filters}>
                Filtrar
              </div>
            }
          </Grid>
        </Paper>
      </Grid>
    </div>
  )
}