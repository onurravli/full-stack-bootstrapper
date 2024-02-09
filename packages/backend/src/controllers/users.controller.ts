import type { Request, Response } from 'express';

class UsersController {
  public async get(req: Request, res: Response) {
    const { id } = req.params;
    return res.status(200).json({
      message: `This will return user with ID ${id}.`,
    });
  }
  public async post(req: Request, res: Response) {
    return res.status(200).json({
      message: 'This will create a new user.',
    });
  }
  public async put(req: Request, res: Response) {
    const { id } = req.params;
    return res.status(200).json({
      message: `This will update user with ID ${id}.`,
    });
  }
  public async delete(req: Request, res: Response) {
    const { id } = req.params;
    return res.status(200).json({
      message: `This will delete user with ID ${id}.`,
    });
  }
}

export { UsersController };
