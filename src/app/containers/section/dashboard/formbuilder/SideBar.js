import {
  Button,
  CardHeader,
  Typography,
  styled,
} from "@mui/material";
 
 
import MinusIcon from "@mui/icons-material/Remove";

export const PrimaryButton = styled(Button)(({ theme }) => ({
    background: '#fff !important',
    border: '2px solid #565656 !important',
    borderRadius: '5px !important',
    width: '116px !important',
    maxWidth: '100% !important',
    height: '44px !important',
    fontSize: '12px !important',
    color: '#000 !important',
    fontWeight: '500 !important',
    textAlign: 'left !important',
    padding: '0px 5px !important',
    letterSpacing: '0px !important',
    '&:hover': {
      background: 'none !important',
      color: '#000 !important',
      borderColor: '#565656 !important',
    },
  }));
  export const PrimaryHeadinding = styled(Typography)(({ theme }) => ({
    background: "linear-gradient(to bottom, #424242 0%, #999999 100%) !important",
            fontSize: "14px !important",
            color: "#fff !important",
            borderRadius: "5px !important",
            padding: "7px 7px !important",
            margin: "0px !important",
            textAlign: "left !important",
            // height: "48px !important",
            // lineHeight: "10px !important", 
  }));