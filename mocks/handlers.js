// ./mocks/handlers.js
import { rest } from "msw";

export const mockUSCities = [
  "New York City",
  "Los Angeles",
  "Chicago",
  "Houston",
  "Phoenix",
  "Philadelphia",
  "San Antonio",
  "San Diego",
  "Dallas",
  "San Jose",
];

export const handlers = [
  rest.get("/api/cities/usa", (req, res, ctx) =>
    res(
      ctx.delay(100),
      ctx.status(200),
      ctx.json(mockUSCities)
    )
  ),
  rest.get("/api/cities/canada", (req, res, ctx) =>
    res(
      ctx.delay(100),
      ctx.status(200),
      ctx.json(mockCanadaCities)
    )
  ),
  rest.get("/api/cities/mexico", (req, res, ctx) =>
    res(
      ctx.delay(100),
      ctx.status(200),
      ctx.json(mockMexicoCities)
    )
  ),
  rest.get("/api/cities/atlantis", (req, res, ctx) =>
    res(
      ctx.delay(100),
      ctx.status(404),
      ctx.json({ message: "Couldn't find any cities" })
    )
  ),
];
