import { NextFunction, Request, Response } from "express";
import { QueryInterface, SpiderChartTypologiesService } from "../services/spider-chart-typologies.service.js";
import { db } from "@src/database/database.js";

export const spiderChartTypologies = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const spiderChartTypologiesService = new SpiderChartTypologiesService(db);

    const query: QueryInterface = {
      page: Number(req.query.page ?? 1),
      pageSize: Number(req.query.pageSize ?? 10),
      dateFrom: new Date(req.query.dateFrom as string),
      dateTo: new Date(req.query.dateTo as string),
      search: req.query.search as string,
    };

    const result = await spiderChartTypologiesService.handle(query);

    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};
