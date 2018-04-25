import { Component, OnInit } from '@angular/core';
import { CompleteWorkHistory } from '@data/workHistory';
import { WorkHistory } from '@models/common/workHistory.model';

import { maxBy, padEnd } from 'lodash';

@Component({
  selector: 'app-profile-work-history',
  templateUrl: './profile-work-history.component.html',
  styleUrls: ['./profile-work-history.component.css']
})
export class ProfileWorkHistoryComponent implements OnInit {

  history = formatWorkHistory(CompleteWorkHistory);

  constructor() { }

  ngOnInit() {
  }

}

function formatWorkHistory(historyCollection: WorkHistory[]): WorkHistory[] {
  // find the max length summary
  const maxSummary = maxBy([].concat(...historyCollection.map(h => h.descriptions)), desc => desc.summary.length);
  const maxSummaryLength = maxSummary.summary.length;
  console.log(maxSummary, maxSummaryLength)
  // go through everything and create snippits as well as split into lines
  historyCollection.forEach((history) => {
    history.descriptions.forEach((desc) => {
      const splitDesc = desc.text[0].split(' ');
      // create 8 word snippet
      const snippet = splitDesc.slice(0, 8).join(' ');
      desc.snippet = desc.snippet || snippet;
      // split desc into multiple lines.
      if (desc.text.length == 1) {
        const newList = [];
        while (splitDesc.length > 0) {
          let line = '';
          while (line.length < 80 && splitDesc.length > 0) {
            line += splitDesc.shift() + ' ';
          }
          newList.push(line);
        }
        desc.text = newList;
      }
      // pad end with spaces
      // desc.summary = padEnd(desc.summary, desc.summary.length + (maxSummaryLength - desc.summary.length) * 6, '&nbsp;');
      // console.log(desc.summary);
    })
  });
  return historyCollection;
}
