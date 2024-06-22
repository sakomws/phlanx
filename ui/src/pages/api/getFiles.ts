import fs from 'fs';
import path from 'path';
import { NextApiRequest, NextApiResponse } from "next";
import { MyFileNamesResult } from "../../lib/types";

// This function runs only on the server side
export default async function getFiles(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {

    // Path to the public directory
    const publicDirectory = path.join(process.cwd(), 'public/pdfs');

    // Read the files in the public directory
    const fileNames = fs.readdirSync(publicDirectory);
    console.log(fileNames)
    // Return the list of files as props
    result = {
      fileNames: fileNames
    };

    res.status(200).json(result);
  } catch (e) {
    res.statusMessage = (e as Error).message;
    res.status(500).end();
  }

}
