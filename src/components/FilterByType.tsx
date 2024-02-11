import { MenuItem, Select, FormControl, InputLabel } from "@mui/material";

import { SelectChangeEvent } from '@mui/material'; 

type FilterByTypeProps = {
  onChange: (value: string) => void;
};

const FilterByType = ({ onChange }: FilterByTypeProps) => {
  return (
    <FormControl sx={{ p: 2,  width: '10vw',marginLeft:'5vw' }}>
      <InputLabel>Filter By Type</InputLabel>
      <Select
        label="Filter By Type"
        onChange={(event: SelectChangeEvent) => { 
          const value = event.target.value;
          onChange(value);
        }}
      >
        <MenuItem value="micro">Micro</MenuItem>
        <MenuItem value="nano">Nano</MenuItem>
        <MenuItem value="regional">Regional</MenuItem>
        <MenuItem value="brewpub">Brewpub</MenuItem>
        <MenuItem value="large">Large</MenuItem>
        <MenuItem value="planning">Planning</MenuItem>
        <MenuItem value="bar">Bar</MenuItem>
        <MenuItem value="contract">Contract</MenuItem>
        <MenuItem value="proprietor">Proprietor</MenuItem>
        <MenuItem value="closed">Closed</MenuItem>
      </Select>
    </FormControl>
  );
};


export default FilterByType;