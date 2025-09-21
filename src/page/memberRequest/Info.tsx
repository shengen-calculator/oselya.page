import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";

const products = [
  {
    name: "Підключення до системи",
    desc: "Вартість послуги",
    price: "0.00",
  },
];

interface InfoProps {
  totalPrice: string;
}

const Info: React.FC<InfoProps> = () => {
  return (
    <React.Fragment>
      <Typography
        variant="subtitle2"
        sx={{ color: "text.secondary" }}
      ></Typography>
      <Typography variant="h4" gutterBottom>
        Створення заявки
      </Typography>
      <List disablePadding>
        {products.map((product) => (
          <ListItem key={product.name} sx={{ py: 1, px: 0 }}>
            <ListItemText
              sx={{ mr: 2 }}
              primary={product.name}
              secondary={product.desc}
            />
            <Typography variant="body1" sx={{ fontWeight: "medium" }}>
              {product.price}
            </Typography>
          </ListItem>
        ))}
      </List>
    </React.Fragment>
  );
};
export default Info;
