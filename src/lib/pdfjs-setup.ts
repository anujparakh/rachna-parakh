// /lib/pdfjs-setup.ts
import { GlobalWorkerOptions } from 'pdfjs-dist';

// Tell PDF.js where the worker lives (served from /public)
GlobalWorkerOptions.workerSrc = '/pdf.worker.min.mjs';
