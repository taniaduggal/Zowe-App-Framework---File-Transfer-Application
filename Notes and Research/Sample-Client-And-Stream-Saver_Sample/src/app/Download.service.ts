// // /*
// //   This program and the accompanying materials are
// //   made available under the terms of the Eclipse Public License v2.0 which accompanies
// //   this distribution, and is available at https://www.eclipse.org/legal/epl-v20.html
// //   SPDX-License-Identifier: EPL-2.0
// //   Copyright Contributors to the Zowe Project.
// // */

// import { Injectable } from '@angular/core';
// import { HttpClient, HttpParams } from '@angular/common/http';
// import { Observable } from 'rxjs/Observable';
// import streamSaver from 'streamsaver';
// import { Angular2InjectionTokens } from 'pluginlib/inject-resources';
// import { WritableStream } from 'web-streams-polyfill/ponyfill';

// @Injectable()
// export class DownloadService {
//     progres: number;
//     abortController = new AbortController();
//     abortSignal: AbortSignal;
//     loaded = 0;
//     total = 0;

//     constructor(private http: HttpClient) {
//         this.abortSignal = this.abortController.signal;
//     }

//     async fetchFileHanlder(fetchPath: string, fileName: string): Promise<any> {
//         const response = await fetch(fetchPath, {signal: this.abortSignal})
//         const readbleStream = response.body;
//         // If the WritableStream is not available (Firefox, Safari), take it from the ponyfill
//         if (!window.WritableStream) {
//             streamSaver.WritableStream = WritableStream;
//         }
//         const fileStream = streamSaver.createWriteStream(fileName);
//         const writer = fileStream.getWriter();
//         if (response.body.pipeTo) {
//             writer.releaseLock();
//             return response.body.pipeTo(fileStream);
//         }
//         const reader = response.body.getReader();

//         const pump = () =>
//             reader
//                 .read()
//                 .then(({ value, done }) => (done ? writer.close() : writer.write(value).then(pump)));
//         pump();
//     }

//     cancelDownload(): void {
//         this.abortController.abort();
//         this.total = 0;
//         this.loaded = 0;
//     }
// }
