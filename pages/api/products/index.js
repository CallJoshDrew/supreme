import { products } from "../../../src/dataDetails";

export default function handler(req, res) {
  res.status(200).json(products);
}

{/* <Container maxWidth="lg" key={index} sx={{ padding: "50px 0" }}>
  <Box
    component="div"
    sx={{
      display: "flex",
      justifyContent: "flex-start",
      gap: "10px",
      alignItems: "center",
      marginBottom: "50px",
    }}
  >
    <Link href="/#Featured Products">
      <ArrowCircleLeftIcon
        sx={{ color: "rgb(255,211,51)", fontSize: "2rem", cursor: "pointer" }}
      />
    </Link>
    <Link href="/#Featured Products">
      <Typography variant="h4" sx={{ cursor: "pointer" }}>
        Back
      </Typography>
    </Link>
  </Box>
  <Box
    component="div"
    sx={{
      display: "flex",
      justifyContent: "center",
      gap: "50px",
    }}
  >
    <Box sx={{ flex: 1, display: "flex", flexDirection: "column" }}>
      <Box
        sx={{
          border: 1,
          borderRadius: "15px",
          borderColor: "rgb(255,211,51)",
          padding: "30px",
        }}
      >
        <Image
          src={image}
          alt="Picture of the author"
          width={260}
          height={200}
          layout="responsive"
        />
      </Box>
      <Typography variant="h4" align="center" sx={{ padding: "20px" }}>
        {name}
      </Typography>
      <Box
        sx={{
          borderRadius: "15px",
          backgroundColor: "rgb(255,211,51)",
        }}
      >
        <Typography variant="h5" align="center" sx={{ padding: "20px" }}>
          {description}
        </Typography>
      </Box>
    </Box>
    <Box sx={{ flex: 1 }}>
      <Box
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          gap: "50px",
        }}
      >
        <Box sx={{ paddingLeft: "30px" }}>
          <Typography variant="h4" gutterBottom>
            Features
          </Typography>
          <Typography variant="h5" gutterBottom>
            - {feature1}
            <br />- {feature2}
            <br />- {feature3}
            <br />- {feature4}
            <br />- {feature5}
          </Typography>
        </Box>
        <Box
          sx={{
            border: 1,
            borderRadius: "15px",
            borderColor: "rgb(255,211,51)",
            padding: "30px",
          }}
        >
          <Typography variant="h4" gutterBottom>
            Technical Data
          </Typography>
          <Box sx={{ flex: 1, display: "flex", gap: "10px" }}>
            <Typography variant="h5" gutterBottom>
              Flow (Q)
              <br />
              Head (H)
              <br />
              Working
              <br />
              Sizes
              <br />
              Solid Handling Capacity <br />
            </Typography>
            <Typography variant="h5" gutterBottom>
              :<br />
              :<br />
              :<br />
              :<br />
              :<br />
            </Typography>
            <Typography variant="h5" gutterBottom>
              {flow} <br />
              {head} <br />
              {temp} <br />
              {sizes} <br />
              {capacity} <br />
            </Typography>
          </Box>
        </Box>
        <Box sx={{ paddingLeft: "30px" }}>
          <Typography variant="h4" gutterBottom>
            Applications
          </Typography>
          <Typography variant="h5" gutterBottom>
            - {application1}
            <br />- {application2}
            <br />- {application3}
            <br />- {application4}
            <br />- {application5}
          </Typography>
        </Box>
        <Box
          sx={{
            border: 1,
            borderRadius: "15px",
            borderColor: "rgb(255,211,51)",
            padding: "30px",
          }}
        >
          <Typography variant="h4" gutterBottom>
            Model
          </Typography>
          <Typography variant="h5" gutterBottom>
            - {mode1}
            <br />- {mode2}
            <br />- {mode3}
            <br />- {mode4}
            <br />- {mode5}
          </Typography>
        </Box>
      </Box>
    </Box>
  </Box>
</Container>; */}
