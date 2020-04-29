function ownerHistoryGenerator(startNum, personAndOrga, application) {
  const createdDate = Date.now();
  const result = `#${startNum}= IFCOWNERHISTORY(#${personAndOrga},#${application},$,.MODIFIED.,$,$,$,${createdDate});`;
  return { endNum: startNum + 1, result };
}

module.exports = { ownerHistoryGenerator };
