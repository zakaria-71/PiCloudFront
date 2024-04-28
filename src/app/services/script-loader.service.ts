// script-loader.service.ts

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScriptLoaderService {

  constructor() { }

  loadScripts(scriptUrls: string[]): Promise<void[]> {
    const promises: Promise<void>[] = [];


    scriptUrls.forEach(scriptUrl => {
      const promise = new Promise<void>((resolve, reject) => {
        const scriptElement = document.createElement('script');
        scriptElement.src = scriptUrl;
        console.log(scriptUrl)
        scriptElement.onload = () => resolve();
        scriptElement.onerror = (error) => reject(error);
        document.body.appendChild(scriptElement);
      });
      promises.push(promise);
    });


    return Promise.all(promises);
  }
}
