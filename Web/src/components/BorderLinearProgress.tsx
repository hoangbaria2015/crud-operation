import { styled } from "@mui/material/styles";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import { Typography } from "@mui/material";

const calculatePercent = (value: number, total: number) =>
  (value / total) * 100;

const calculateBarColor = (value: number, total: number) => {
  if (value === 0) {
    return "#c3cfdc";
  }

  if (value === total) {
    return "#8e8e90";
  }

  return "#6a9b70";
};

const calculatePrimaryColor = (value: number, total: number) => {
  if (value === 0) {
    return "#c3cfdc";
  }

  if (value === total) {
    return "#8e8e90";
  }

  return "#d3e2d5";
};

interface CustomizedProgressBarsProps {
  value: number;
  total: number;
}

const CustomizedProgressBars: React.FC<CustomizedProgressBarsProps> = ({
  value,
  total,
}) => {
  const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 5,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor: calculatePrimaryColor(value, total),
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 5,
      backgroundColor: calculateBarColor(value, total),
    },
  }));

  return (
    <>
      <Typography align="center" variant="caption" component="div">
        {value} / {total}
      </Typography>
      <BorderLinearProgress
        variant="determinate"
        value={calculatePercent(value, total)}
      />
    </>
  );
};

export default CustomizedProgressBars;
