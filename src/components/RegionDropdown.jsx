import React from "react";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";

const theme = createMuiTheme({
  overrides: {
    "& $MuiFormControl-root": {
      backgroundColor: "white"
    },
    MuiOutlinedInput: {
      root: {
        "& $notchedOutline": {
          borderColor: "#42A69A"
        },
        "&:hover $notchedOutline": {
          borderColor: "#42A69A"
        },
        "&$focused $notchedOutline": {
          borderColor: "#42A69A",
        }
      }
    }
  }
});


export default function RegionDropdown({changeRegion, region}) {

  const handleChange = (e) => {
    changeRegion(e.target.value)
  };
  
  return (
    <MuiThemeProvider theme={theme}>
      <FormControl variant="outlined" style={{ minWidth: 200 }} color="primary">
        <Select
          style={{
            height: "40px",
            textAlign: "left",
          }}
          value={region}
          onChange={handleChange}
          placeholder="Region"
        >
          <MenuItem value={"South"}>South Jersey</MenuItem>
          <MenuItem value={"Central"}>Central Jersey</MenuItem>
          <MenuItem value={"North"}>North Jersey</MenuItem>
        </Select>
      </FormControl>
    </MuiThemeProvider>
  );
}
