export type VendorTier = 'Critical' | 'Elevated' | 'Standard'
export type ReviewState = 'In review' | 'Blocked' | 'Ready' | 'Escalated'

export type VendorRecord = {
  name: string
  category: string
  tier: VendorTier
  region: string
  owner: string
  renewalWindow: string
  state: ReviewState
  posture: number
  slaRisk: 'Low' | 'Medium' | 'High'
  findings: number
  openActions: number
}

export const heroMetrics = [
  { label: 'Active vendors', value: '128', detail: '+14 this quarter' },
  { label: 'Critical reviews', value: '19', detail: '6 executive-visible' },
  { label: 'Policy exceptions', value: '11', detail: '3 past SLA' },
  { label: 'Remediation burn-down', value: '74%', detail: 'Target: 80%' },
]

export const tierMix = [
  { label: 'Critical vendors', value: 32, color: '#ff9f5a' },
  { label: 'Elevated vendors', value: 46, color: '#57d0ff' },
  { label: 'Standard vendors', value: 50, color: '#8f9bb4' },
]

export const vendors: VendorRecord[] = [
  {
    name: 'Atlas Cloud Security',
    category: 'Identity / PAM',
    tier: 'Critical',
    region: 'North America',
    owner: 'Platform Security',
    renewalWindow: '45 days',
    state: 'Blocked',
    posture: 61,
    slaRisk: 'High',
    findings: 8,
    openActions: 5,
  },
  {
    name: 'Crest Analytics',
    category: 'Data / BI',
    tier: 'Elevated',
    region: 'EMEA',
    owner: 'RevOps Analytics',
    renewalWindow: '72 days',
    state: 'In review',
    posture: 78,
    slaRisk: 'Medium',
    findings: 4,
    openActions: 2,
  },
  {
    name: 'Northwind CRM Systems',
    category: 'Customer Platform',
    tier: 'Critical',
    region: 'Global',
    owner: 'Revenue Systems',
    renewalWindow: '18 days',
    state: 'Escalated',
    posture: 55,
    slaRisk: 'High',
    findings: 12,
    openActions: 7,
  },
  {
    name: 'Meridian Content Ops',
    category: 'Content / CMS',
    tier: 'Standard',
    region: 'North America',
    owner: 'Web Platform',
    renewalWindow: '98 days',
    state: 'Ready',
    posture: 90,
    slaRisk: 'Low',
    findings: 1,
    openActions: 1,
  },
]

export const workflowStages = [
  { name: 'Intake', count: 22, detail: 'Awaiting scoping and due diligence trigger' },
  { name: 'Assessment', count: 17, detail: 'Control review and questionnaire scoring' },
  { name: 'Exception review', count: 9, detail: 'Open policy waivers and executive sign-off' },
  { name: 'Remediation', count: 14, detail: 'Supplier actions and internal follow-through' },
  { name: 'Renewal gate', count: 7, detail: 'Commercial decision under risk pressure' },
]

export const exceptions = [
  {
    vendor: 'Atlas Cloud Security',
    exception: 'SOC 2 bridge letter missing',
    owner: 'Security Governance',
    due: '2 days',
    severity: 'High',
  },
  {
    vendor: 'Northwind CRM Systems',
    exception: 'Subprocessor inventory stale',
    owner: 'Privacy',
    due: '5 days',
    severity: 'High',
  },
  {
    vendor: 'Crest Analytics',
    exception: 'Regional data retention variance',
    owner: 'Legal Ops',
    due: '9 days',
    severity: 'Medium',
  },
]

export const postureTrend = [
  { month: 'Jan', value: 64 },
  { month: 'Feb', value: 66 },
  { month: 'Mar', value: 71 },
  { month: 'Apr', value: 68 },
  { month: 'May', value: 74 },
  { month: 'Jun', value: 78 },
]

export const remediationQueue = [
  { title: 'Close critical vendor findings before renewal window', owner: 'Security PMO', priority: 'P1', count: 6 },
  { title: 'Re-score AI processing vendors against updated policy baseline', owner: 'AI Governance', priority: 'P1', count: 4 },
  { title: 'Resolve DPA signature lag across EMEA vendors', owner: 'Legal Ops', priority: 'P2', count: 5 },
  { title: 'Consolidate stale questionnaires into one control evidence bundle', owner: 'Compliance Ops', priority: 'P3', count: 8 },
]

export const scorecards = [
  { title: 'Control coverage', score: '82%', detail: 'Controls mapped and evidenced across top-tier vendors.' },
  { title: 'Questionnaire freshness', score: '69%', detail: 'Several elevated vendors are nearing evidence expiration.' },
  { title: 'Renewal pressure', score: '11', detail: 'Vendors inside 90-day window with unresolved findings.' },
  { title: 'Executive blockers', score: '3', detail: 'Items requiring legal, privacy, or leadership exception review.' },
]
