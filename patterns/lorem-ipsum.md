---
layout: page
title: Lorem Ipsum
excerpt: Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
tags: [ Lorem ]
---

# Background

The Information and Communications Technology Architecture Branch
(ICTAB) have developed this technical pattern to guide Defence and its
organisations in deploying a cloud-native Microsoft Sentinel Security
Information and Event Management (SIEM) solution.

# Overview

Microsoft Sentinel is the Azure-hosted, cloud-native, SIEM, and Security
Orchestration, Automation, and Response (SOAR) enterprise solution.
Microsoft Sentinel delivers in-depth, intelligent security analytics and
comprehensive threat intelligence across an organisation, providing a
singular solution for attack detection, threat visibility, proactive
hunting, and threat response.

Microsoft Sentinel's functions can be broken down into four (4)
overarching categories:

**Collect** - Microsoft Sentinel effortlessly integrates with various
sources to ingest and collate data of all users, devices, applications,
and infrastructure, within an organisation, both on-premises and in the
cloud.

**Detect** -- Microsoft Sentinel performs continuous monitoring and
detection to identify system threats and reduce the number of false
positives using Microsoft's analytics and comprehensive threat
intelligence capabilities.

**Investigate** -- Once identified, threats are automatically examined
leveraging artificial intelligence (AI), and suspicious activities are
hunted for at an unparalleled scale.

**Respond** -- Built-in orchestration and automation enabled quick
response to incidents with pre-configured common tasks.

![](media/image5.png){style="width:3.23293in;height:3.33858in"}

The following sections of this document outline design defaults and
guidance when deploying a Microsoft Sentinel solution.

![](media/image6.png){style="width:6.66043in;height:3.80189in"}

This diagram shows a typical architectural overview for a Microsoft
Sentinel deployment.

Multiple log sources are supported for ingestion into Microsoft
Sentinel. Sources can include Azure native services and virtual
machines, other vendor cloud Software as a Services (SaaS), on-premises
network devices and Windows and Linux server infrastructure.

Logs are forwarded to Azure Log Analytics workspace and Microsoft
Defender for Cloud acting as the environment log collectors.

Microsoft Sentinel retrieves logs via Data Connectors and aggregates and
correlates the ingested data.

## Purpose

This document provides a technical pattern to guide consumers in
developing and delivering cloud-native SIEM solutions that meets
cyber-security controls outlined within the ISM and NIST Security and
Privacy Controls for Information Systems and Organisations (Special
Publication 800-53). This document also considers the architecture
principles defined by the ICTAB Enterprise Architecture Principles
guidance.

**Note:** This pattern does not remove the need for Defence
organisations to perform log shipping to the Defence Security Operations
Center (DSOC) when feasible. This Microsoft Sentinel pattern provides an
alternative option to meet security controls for systems where direct
DSOC SIEM integration is unavailable, unsuitable or when a
system-specific SIEM is needed.

## Scope

The below table describes the components that are in scope for this
pattern. Anything not listed is not in the scope of this document.

In Scope Components

| Component                        | Inclusions                        |
|----------------------------------|-----------------------------------|
| Microsoft Sentinel               | Service Deployment  <br>Data Connectors  <br>Workbooks  <br>Threat Detection Rules  <br>Security Orchestration,  <br>Automation, and Response  <br>Role-Based Access Control |

## Assumptions

The following represent the assumptions before the deployment of
Microsoft Sentinel.

The associated environments and systems have internet connectivity to
Microsoft Azure endpoints.

## Prerequisites

The following represent the prerequisites before the deployment of
Microsoft Sentinel.

An Azure subscription available as the deployment location for the
Microsoft Sentinel service.

Azure Log Analytics workspace that can be connected to the Microsoft
Sentinel service.

## Documentation

### Related Patterns

The table below identifies patterns and frameworks; this solution
interconnects with were considered during the creation of this document.

Related Patterns

  ------------------------------------------------------------------------
  Name                                                   Version   Date
  ------------------------------------------------------ --------- -------
  Azure Logging -- Technical Pattern                     N/A       N/A

  Anomalies and Events Correlation -- Framework Pattern  N/A       N/A

  Alerting -- Framework Pattern                          N/A       N/A

  Defence Security Operations Centre Security            N/A       N/A
  Information Event Management -- Framework Pattern                

  Logging -- Framework Pattern                           N/A       N/A

  Monitoring -- Framework Pattern                        N/A       N/A

  Insider Threat Detection -- Framework Pattern          N/A       N/A
  ------------------------------------------------------------------------

### Document Structure

This document is designed technical in nature, with the audience
expected to be familiar with ICT system environments.

This document covers the information described in the below table.

Document Structure

  -----------------------------------------------------------------------
  Section                             Description
  ----------------------------------- -----------------------------------
  Microsoft Sentinel                  The Microsoft Sentinel section
                                      includes information and technical
                                      guidance for designing and
                                      deploying the cloud-native SIEM
                                      pattern.

  -----------------------------------------------------------------------

For each component within the document, there is a brief description of
the content in the related section, a commentary on items considered in
determining the pattern, and the pattern decisions themselves.

### Document References

  ----------------------------------------------------------------------
  Name                                          Version      Date
  --------------------------------------------- ------------ -----------
  Azure security baseline for Microsoft         N/A          7 August
  Sentinel                                                   2022

  Information Security Manual (June 2022)       N/A          16 June
                                                             2022

  ISM - System Security Plan Annex              N/A          16 June
                                                             2022

  Framework for Improving Critical              1.1          16 April
  Infrastructure Cybersecurity                               2018

  Security and Privacy Controls for Information N/A          September
  Systems and Organisations                                  2020

  Security and Privacy Controls for Information N/A          September
  Systems and Organisations Control Catalog                  2020

  NIST Special Publication 800-207              N/A          August 2020

  Defence Security Policy Framework             N/A          31 July
                                                             2020

  ICTAB Enterprise Architecture Principles      N/A          31 July
                                                             2020
  ----------------------------------------------------------------------

## Security Considerations

### Reference - ICTAB Use Only

  ----------------------------------------------------------------------
  ICTAB Use    metadata
  ------------ ---------------------------------------------------------
  Content      

  Reference    
  URLs         

  What's New   

  Update       
  process      

  Author       

  Content      
  Owner        

  Last Update  

  Site Update  
  ----------------------------------------------------------------------

### Cyber Security Principles

The following pattern has been developed to meet the cyber security
principles as defined by the Defence Security Principle Framework
(DSPF), the Australian Government Information Security Manual (ISM) and
the National Institute of Standards and Technology (NIST) Cyber Security
Framework.

Defence Security Framework Policy Principles

  ----------------------------------------------------------------------
  Principle   Description
  ID          
  ----------- ----------------------------------------------------------
  **P19**     Information Systems Logical Security

  **P21**     Offshore and Cloud-Based Computing

  **P24**     Information Systems Security Incident Management

  **P28**     Information Systems Log Management

  **P77**     Security Incident Management and Investigation
  ----------------------------------------------------------------------

ISM Cyber Security Principles

  ----------------------------------------------------------------------
  Principle   Description
  ID          
  ----------- ----------------------------------------------------------
  **G5**      Security risks are identified, documented, managed and
              accepted both before systems and applications are
              authorised for use, and continuously throughout their
              operational life.

  **P2**      Systems and applications are delivered and supported by
              trusted suppliers.

  **P3**      Systems and applications are configured to reduce their
              attack surface.

  **P4**      Systems and applications are administered in a secure and
              accountable manner.

  **P5**      Security vulnerabilities in systems and applications are
              identified and mitigated in a timely manner.

  **P7**      Data is encrypted at rest and in transit between different
              systems.

  **P8**      Data communicated between different systems is controlled
              and inspectable.

  **P11**     Personnel are granted the minimum access to systems,
              applications and data repositories required for their
              duties.

  **D1**      Event logs are collected and analysed in a timely manner
              to detect cyber security events.

  **D2**      Cyber security events are analysed in a timely manner to
              identify cyber security incidents.

  **R1**      Cyber security incidents are reported both internally and
              externally to relevant bodies in a timely manner.
  ----------------------------------------------------------------------

NIST Cyber Security Framework

  ------------------------------------------------------------------------
  Framework ID  Description
  ------------- ----------------------------------------------------------
  **ID.RA-2**   Cyber threat intelligence is received from information
                sharing forums and sources.

  **ID.RA-3**   Threats, both internal and external, are identified and
                documented.

  **ID.RA-4**   Potential business impacts and likelihoods are identified

  **ID.RA-5**   Threats, vulnerabilities, likelihoods, and impacts are
                used to determine risk

  **ID.RA-6**   Risk responses are identified and prioritised.

  **ID.SC-2**   Suppliers and third-party partners of information systems,
                components, and services are identified, prioritised, and
                assessed using a cyber supply chain risk assessment
                process

  **ID.SC-4**   Suppliers and third-party partners are routinely assessed
                using audits, test results, or other forms of evaluations
                to confirm they are meeting their contractual obligations

  **PR.AC-4**   Access permissions and authorisations are managed,
                incorporating the principles of least privilege and
                separation of duties

  **PR.DS-1**   Data-at-rest is protected

  **PR.DS-2**   Data-in-transit is protected

  **PR.PT-1**   Audit/log records are determined, documented, implemented,
                and reviewed in accordance with policy

  **DE.AE-2**   Detected events are analysed to understand attack targets
                and methods

  **DE.AE-3**   Event data are collected and correlated from multiple
                sources and sensors

  **DE.AE-4**   Impact of events is determined

  **DE.AE-5**   Incident alert thresholds are established DE.AE-5:
                Incident alert thresholds are established

  **DE.CM-1**   The network is monitored to detect potential cybersecurity
                events

  **DE.CM-2**   The physical environment is monitored to detect potential
                cybersecurity events

  **DE.CM-3**   Personnel activity is monitored to detect potential
                cybersecurity events

  **DE.DP-4**   Event detection information is communicated

  **RS.AN-1**   Notifications from detection systems are investigated
  ------------------------------------------------------------------------

### Cyber Security Controls

Introducing new systems carries risk for the organisation. While many
risks can be reduced or removed through technical control, others
require user training and organisational policy to ensure
responsibilities are met and understood.

This pattern has been developed to provide compliance to applicable
cyber-security controls outlined within the ISM and NIST Special
Publication 800-53; however, it remains the responsibility of
implementing system owners to ensure appropriate security risk
assessments and system accreditation activities are undertaken and
completed.

The below table outlines the possible status options for the control
applicability tables.

Understanding the Status

  ------------------------------------------------------------------------------
  Status               Description                                      
  ----------------- -- ------------------------------------------------ --------
  **Implemented**      Controls that are implemented as part of this    
                       pattern by default.                              

  **Available**        Controls that are available to implement but     
                       require an external system connection or         
                       additional configuration.                        

  **Not available**    Controls that are normally available but cannot  
                       be implemented due to technical, environmental   
                       or configuration restraints.                     
  ------------------------------------------------------------------------------

Each table below identifies cyber-security controls that this solution
addresses when assessing the risk for a connected system or environment.

**Note:** The following tables are valid at the initial pattern
development and updated at each subsequent document uplift. However, it
is the pattern consumers' responsibility to perform validation against
current versions of the ISM and NIST Special Publication 800-53 as part
of the project's security accreditation activities.

ISM Control Applicability

  ---------------------------------------------------------------------------------
  Control ID     Title             Description                        Status
  -------------- ----------------- ---------------------------------- -------------
  **ISM-1526**   Protecting        System owners monitor each system, Implemented
                 systems and their and associated cyber threats,      
                 resources         security risks and controls, on an 
                                   ongoing basis.                     

  **ISM-0120**   Access to         Cyber security personnel have      Implemented
                 sufficient data   access to sufficient data sources  
                 sources and tools and tools to ensure that systems   
                                   can be monitored for key           
                                   indicators of compromise.          

  **ISM-1566**   Unprivileged      Use of unprivileged access is      Available
                 access to systems logged.                            

  **ISM-1714**   Unprivileged      Unprivileged access event logs are Implemented
                 access to systems centrally stored and protected     
                                   from unauthorised modification and 
                                   deletion, monitored for signs of   
                                   compromise, and actioned when      
                                   cyber security events are          
                                   detected.                          

  **ISM-0585**   Event log details For each event logged, the date    Implemented
                                   and time of the event, the         
                                   relevant user or process, the      
                                   relevant filename, the event       
                                   description, and the ICT equipment 
                                   involved are recorded.             

  **ISM-1405**   Event logging     A centralised event logging        Implemented
                 facility          facility is implemented and        
                                   systems are configured to save     
                                   event logs to the facility as soon 
                                   as possible after each event       
                                   occurs.                            

  **ISM-0988**   Event logging     An accurate time source is         Implemented
                 facility          established and used consistently  
                                   across systems to assist with      
                                   identifying connections between    
                                   events.                            

  **ISM-0109**   Event log         Event logs are analysed in a       Implemented
                 monitoring        timely manner to detect cyber      
                                   security events.                   

  **ISM-1228**   Event log         Cyber security events are analysed Implemented
                 monitoring        in a timely manner to identify     
                                   cyber security incidents.          

  **ISM-0859**   Event log         Event logs are retained for a      Implemented
                 retention         minimum of 7 years in accordance   
                                   with the National Archives of      
                                   Australia's Administrative         
                                   Functions Disposal Authority       
                                   Express Version 2 publication.     

  **ISM-0991**   Event log         Domain Name System and web proxy   Available
                 retention         event logs are retained for at     
                                   least 18 months.                   

  **ISM-1758**   Database event    Database event logs are centrally  Available
                 logging           stored and protected from          
                                   unauthorised modification and      
                                   deletion, monitored for signs of   
                                   compromise, and actioned when      
                                   cyber security events are          
                                   detected.                          

  **ISM-1775**   Gateway event     Gateway event logs are centrally   Available
                 logging and       stored and protected from          
                 alerting          unauthorised modification and      
                                   deletion, monitored for signs of   
                                   compromise, and actioned when      
                                   cyber security events are          
                                   detected.                          

  **ISM-1776**   Cross Domain      CDS event logs are centrally       Available
                 Solution event    stored and protected from          
                 logging           unauthorised modification and      
                                   deletion, monitored for signs of   
                                   compromise, and actioned when      
                                   cyber security events are          
                                   detected.                          

  **ISM-1777**   Web proxy event   Web proxy event logs are centrally Available
                 logging           stored and protected from          
                                   unauthorised modification and      
                                   deletion, monitored for signs of   
                                   compromise, and actioned when      
                                   cyber security events are          
                                   detected.                          
  ---------------------------------------------------------------------------------

NIST Control Applicability


| C      | Title           | Description                     | Status |
| ontrol |                 |                                 |        |
| ID     |                 |                                 |        |
|--------|-----------------|---------------------------------|--------|
| **AC-2 | Information     | Information search and          | Imple  |
| 1(2)** | Search and      | retrieval services identify     | mented |
|        | Retrieval       | information system resources    |        |
|        |                 | relevant to an information      |        |
|        |                 | need.                           |        |

| **A    | Event Logging   | Identify the types of events    | Imple  |
| U-2a** |                 | that the system is capable of   | mented |
|        |                 | logging in support of the audit |        |
|        |                 | function                        |        |

| **     | Content of      | Ensure that audit records       | Imple  |
| AU-3** | Audit Records   | contain information that        | mented |
|        |                 | establishes the following:      |        |
|        |                 |                                 |        |
|        |                 | a.  What type of event          |        |
|        |                 |     occurred;                   |        |
|        |                 |                                 |        |
|        |                 | b.  When the event occurred;    |        |
|        |                 |                                 |        |
|        |                 | c.  Where the event occurred;   |        |
|        |                 |                                 |        |
|        |                 | d.  Source of the event;        |        |
|        |                 |                                 |        |
|        |                 | e.  Outcome of the event; and   |        |
|        |                 |                                 |        |
|        |                 | f.  Identity of any             |        |
|        |                 |     individuals, subjects, or   |        |
|        |                 |     objects/entities associated |        |
|        |                 |     with the event.             |        |

| **AU-  | Transfer to     | Transfer audit logs to a        | Imple  |
| 4(1)** | Alternate       | different system, system        | mented |
|        | Storage         | component, or media other than  |        |
|        |                 | the system or system component  |        |
|        |                 | conducting the logging.         |        |

| **     | Response to     | Audit logging process failures  | Imple  |
| AU-5** | Audit Logging   | include software and hardware   | mented |
|        | Process         | errors, failures in audit log   |        |
|        | Failures        | capturing mechanisms, and       |        |
|        |                 | reaching or exceeding audit log |        |
|        |                 | storage capacity.               |        |

| **AU-  | Response to     | Alerts provide organisations    | Imple  |
| 5(2)** | Audit Logging   | with urgent messages. Real-time | mented |
|        | Process         | alerts provide these messages   |        |
|        | Failures \|     | at information technology speed |        |
|        | Real-time       | (i.e., the time from event      |        |
|        | Alerts          | detection to alert occurs in    |        |
|        |                 | seconds or less).               |        |

| **AU-  | Audit Record    | Organisational processes that   | Imple  |
| 6(1)** | Review,         | benefit from integrated audit   | mented |
|        | Analysis, and   | record review, analysis, and    |        |
|        | Reporting \|    | reporting include incident      |        |
|        | Automated       | response, continuous            |        |
|        | Process         | monitoring, contingency         |        |
|        | Integration     | planning, investigation and     |        |
|        |                 | response to suspicious          |        |
|        |                 | activities, and Inspector       |        |
|        |                 | General audits.                 |        |

| **AU-  | Audit Record    | Provide and implement the       | Imple  |
| 6(3)** | Review,         | capability to centrally review  | mented |
|        | Analysis, and   | and analyse audit records from  |        |
|        | Reporting \|    | multiple components within the  |        |
|        | Correlate Audit | system.                         |        |
|        | Record          |                                 |        |
|        | Repositories    |                                 |        |

| **AU-  | Audit Record    | Automated mechanisms for        | Imple  |
| 6(4)** | Review,         | centralised reviews and         | mented |
|        | Analysis, and   | analyses include Security       |        |
|        | Reporting \|    | Information and Event           |        |
|        | Central Review  | Management products.            |        |
|        | and Analysis    |                                 |        |

| **AU-  | Audit Record    | Integrate analysis of audit     | Imple  |
| 6(5)** | Review,         | records with analysis of        | mented |
|        | Analysis, and   | performance data; system        |        |
|        | Reporting \|    | monitoring information; to      |        |
|        | Integrated      | further enhance the ability to  |        |
|        | Analysis of     | identify inappropriate or       |        |
|        | Audit Records   | unusual activity.               |        |

| **AU-  | Audit Record    | Organisations specify permitted | Imple  |
| 6(7)** | Review,         | actions for system processes,   | mented |
|        | Analysis, and   | roles, and users associated     |        |
|        | Reporting \|    | with the review, analysis, and  |        |
|        | Permitted       | reporting of audit records      |        |
|        | Actions         | through system account          |        |
|        |                 | management activities           |        |

| **     | Audit Record    | Provide and implement an audit  | Imple  |
| AU-7** | Reduction and   | record reduction and report     | mented |
|        | Report          | generation capability that:     |        |
|        | Generation      |                                 |        |
|        |                 | a.  Supports on-demand audit    |        |
|        |                 |     record review, analysis,    |        |
|        |                 |     and reporting requirements  |        |
|        |                 |     and after-the-fact          |        |
|        |                 |     investigations of           |        |
|        |                 |     incidents; and              |        |
|        |                 |                                 |        |
|        |                 | g.  Does not alter the original |        |
|        |                 |     content or time ordering of |        |
|        |                 |     audit records.              |        |

| **AU-  | Audit Record    | Events of interest can be       | Imple  |
| 7(1)** | Reduction and   | identified by the content of    | mented |
|        | Report          | audit records, including system |        |
|        | Generation \|   | resources involved, information |        |
|        | Automatic       | objects accessed, identities of |        |
|        | Processing      | individuals, event types, event |        |
|        |                 | locations, event dates and      |        |
|        |                 | times, Internet Protocol        |        |
|        |                 | addresses involved, or event    |        |
|        |                 | success or failure.             |        |

| **     | Protection of   | Protect audit information and   | Imple  |
| AU-9** | Audit           | audit logging tools from        | mented |
|        | Information     | unauthorised access,            |        |
|        |                 | modification, and deletion; and |        |

| **AU-  | Protection of   | Store audit records,in a        | Imple  |
| 9(2)** | Audit           | repository that is part of a    | mented |
|        | Information \|  | physically different system or  |        |
|        | Store on        | system component than the       |        |
|        | Separate        | system or component being       |        |
|        | Physical        | audited.                        |        |
|        | Systems or      |                                 |        |
|        | Components      |                                 |        |

| **AU-  | Protection of   | Implement cryptographic         | Imple  |
| 9(3)** | Audit           | mechanisms to protect the       | mented |
|        | Information \|  | integrity of audit information  |        |
|        | Cryptographic   | and audit tools.                |        |
|        | Protection      |                                 |        |

| **AU-  | Protection of   | Authorise access to management  | Imple  |
| 9(4)** | Audit           | of audit logging functionality  | mented |
|        | Information \|  | to only a subset of privileged  |        |
|        | Access by       | users or roles.                 |        |
|        | Subset of       |                                 |        |
|        | Privileged      |                                 |        |
|        | Users           |                                 |        |

| **AU-  | Protection of   | Authorise read-only access to   | Imple  |
| 9(6)** | Audit           | audit information to a subset   | mented |
|        | Information \|  | of privileged users or roles.   |        |
|        | Read-only       |                                 |        |
|        | Access          |                                 |        |

| **AU-  | Protection of   | Store audit information on a    | Imple  |
| 9(7)** | Audit           | component running a different   | mented |
|        | Information \|  | operating system than the       |        |
|        | Store on        | system or component being       |        |
|        | Component with  | audited.                        |        |
|        | Different       |                                 |        |
|        | Operating       |                                 |        |
|        | System          |                                 |        |

| **A    | Audit Record    | Retain audit records for seven  | Imple  |
| U-11** | Retention       | years to provide support for    | mented |
|        |                 | after-the-fact investigations   |        |
|        |                 | of incidents and to meet        |        |
|        |                 | regulatory and organisational   |        |
|        |                 | information retention           |        |
|        |                 | requirements.                   |        |

| **AU-1 | Audit Record    | Ensure that long-term audit     | Imple  |
| 1(1)** | Retention \|    | records generated by the system | mented |
|        | Long-term       | can be retrieved.               |        |
|        | Retrieval       |                                 |        |
|        | Capability      |                                 |        |

| **A    | Audit Record    | Provide audit record generation | Imple  |
| U-12** | Generation      | capability for the event types  | mented |
|        |                 | the system is capable of        |        |
|        |                 | auditing as defined in AU-2a    |        |
|        |                 | on;                             |        |
|        |                 |                                 |        |
|        |                 | a.  Allow administrators to     |        |
|        |                 |     select the event types that |        |
|        |                 |     are to be logged by         |        |
|        |                 |     specific components of the  |        |
|        |                 |     system; and                 |        |
|        |                 |                                 |        |
|        |                 | h.  Generate audit records for  |        |
|        |                 |     the event types defined in  |        |
|        |                 |     AU-2c that include the      |        |
|        |                 |     audit record content        |        |
|        |                 |     defined in AU-3.            |        |

| **AU-1 | Audit Record    | Compile audit records from      | Imple  |
| 2(1)** | Generation \|   | system components into a        | mented |
|        | Standardised    | system-wide (logical or         |        |
|        | Formats         | physical) audit trail that is   |        |
|        |                 | time-correlated.                |        |

| **AU-1 | Monitoring for  | Employ discovery techniques,    | Imple  |
| 3(3)** | Information     | processes, and tools            | mented |
|        | Disclosure \|   | to determine if external        |        |
|        | Unauthorised    | entities are replicating        |        |
|        | Replication of  | organisational information in   |        |
|        | Information     | an unauthorised manner.         |        |

| **CM-  | Configuration   | Implement the following         | Ava    |
| 3(5)** | Change Control  | security responses              | ilable |
|        | \| Automated    | automatically if baseline       |        |
|        | Security        | configurations are changed in   |        |
|        | Response        | an unauthorised manner: \[Per   |        |
|        |                 | project configuration of        |        |
|        |                 | SOAR\].                         |        |

| **R    | Threat Hunting  | Establish and maintain a cyber  | Ava    |
| A-10** |                 | threat hunting capability to:   | ilable |
|        |                 |                                 |        |
|        |                 | i.  Search for indicators of    |        |
|        |                 |     compromise in               |        |
|        |                 |     organisational systems; and |        |
|        |                 |                                 |        |
|        |                 | j.  Detect, track, and disrupt  |        |
|        |                 |     threats that evade existing |        |
|        |                 |     controls; and               |        |
|        |                 |                                 |        |
|        |                 | Employ the threat hunting       |        |
|        |                 | capability.                     |        |

| **SI-4**   | System          | Monitor the system to detect    | Imple  |
|        | Monitoring      | attacks and indicators of       | mented |
|        |                 | potential attacks.              |        |
|        |                 |                                 |        |
|        |                 | Identify unauthorised use of    |        |
|        |                 | the system.                     |        |
|        |                 |                                 |        |
|        |                 | Invoke internal monitoring      |        |
|        |                 | capabilities or deploy          |        |
|        |                 | monitoring devices              |        |
|        |                 |                                 |        |
|        |                 | Analyse detected events and     |        |
|        |                 | anomalies;                      |        |

| S      | System          | Connect and configure           | Imple  |
| I-4(1) | Monitoring \|   | individual intrusion detection  | mented |
|        | System-wide     | tools into a system-wide        |        |
|        | Intrusion       | intrusion detection system.     |        |
|        | Detection       |                                 |        |
|        | System          |                                 |        |

| S      | System          | Employ automated tools and      | Imple  |
| I-4(2) | Monitoring \|   | mechanisms to support near      | mented |
|        | Automated Tools | real-time analysis of events.   |        |
|        | and Mechanisms  |                                 |        |
|        | for Real-time   |                                 |        |
|        | Analysis        |                                 |        |

| SI-12  | Information     | Manage and retain information   | Imple  |
|        | Management and  | within the system and           | mented |
|        | Retention       | information output from the     |        |
|        |                 | system in accordance with       |        |
|        |                 | applicable laws, executive      |        |
|        |                 | orders, directives,             |        |
|        |                 | regulations, policies,          |        |
|        |                 | standards, guidelines and       |        |
|        |                 | operational requirements.       |        |


# Microsoft Sentinel Components

## Service Deployment

### Reference - ICTAB Use Only

  ----------------------------------------------------------------------
  ICTAB Use    metadata
  ------------ ---------------------------------------------------------
  Content      

  Reference    
  URLs         

  What's New   

  Update       
  process      

  Author       

  Content      
  Owner        

  Last Update  

  Site Update  
  ----------------------------------------------------------------------

### Description

Microsoft Sentinel integrates with proven Azure native capabilities,
including Log Analytics and Logic Apps. Leveraging AI, Microsoft
Sentinel enriches investigation and detection and consumes Microsoft's
threat intelligence stream.

### Considerations

N/A

### Decisions

The table below describes the Service Deployment pattern decisions.

Service Deployment pattern decisions


| Decision Point       | Design Decision      | Justification        |
|----------------------|----------------------|----------------------|
| Azure Subscription   | Subscription ID:     | An Azure             |
|                      | \<Project specific\> | subscription is a    |
|                      |                      | requirement for      |
|                      |                      | onboarding Microsoft |
|                      |                      | Sentinel.            |

| Log Analytics        | Workspace name:      | Log Analytics        |
|                      | \<Project specific\> | workspace will be    |
|                      |                      | leveraged for        |
|                      | Resource group:      | Microsoft Sentinel.  |
|                      | \<Project specific\> |                      |
|                      |                      |                      |
|                      | Region: \<Project    |                      |
|                      | specific\>           |                      |
|                      |                      |                      |
|                      | Subscription:        |                      |
|                      | \<Project specific\> |                      |

| Log Analytics        | Two years (Maximum   | Two years is the     |
| Interactive          | interactive log      | maximum interactive  |
| Retention Period     | retention period)    | data retention       |
|                      |                      | period configurable  |
|                      |                      | in Log Analytics and |
|                      |                      | provides the maximum |
|                      |                      | retention of         |
|                      |                      | ingested log data.   |

| Log Data Archive     | Five years (Maximum  | All logs must be     |
| Period               | archive log          | exported and         |
|                      | retention period)    | retained to meet the |
|                      |                      | seven-year retention |
|                      | **Note:** Total      | requirements         |
|                      | retention time is    | .[^1^](#fn1){#fnref1 |
|                      | inclusive of         | .footnote-ref        |
|                      | interactive log      | role="doc-noteref"}  |
|                      | time. Logs are       |                      |
|                      | retained for a total | Logs older than two  |
|                      | of seven years.      | years must be        |
|                      |                      | archived to be       |
|                      |                      | stored for up to     |
|                      |                      | seven years. Logs    |
|                      |                      | that have not been   |
|                      |                      | archived are in an   |
|                      |                      | interactive          |
|                      |                      | retention period.    |
|                      |                      | Once a log has been  |
|                      |                      | archived for         |
|                      |                      | long-term storage,   |
|                      |                      | it can only be       |
|                      |                      | interacted with by   |
|                      |                      | running a search job |
|                      |                      | or restoring from    |
|                      |                      | the archive.         |
|                      |                      |                      |
|                      |                      | Table data in the    |
|                      |                      | Log Analytics        |
|                      |                      | workspace            |
|                      |                      | automatically        |
|                      |                      | becomes archived     |
|                      |                      | after the            |
|                      |                      | interactive log      |
|                      |                      | period.              |
|                      |                      |                      |
|                      |                      | **Note:** Microsoft  |
|                      |                      | provides multiple    |
|                      |                      | methods for          |
|                      |                      | configuring basic    |
|                      |                      | and archive tiers    |
|                      |                      | per data             |
|                      |                      | table                |
|                      |                      | .[^2^](#fn2){#fnref2 |
|                      |                      | .footnote-ref        |
|                      |                      | role="doc-noteref"}  |

| Log Analytic tables  | All tables in the    | Currently, archiving |
| with custom total    | Log Analytics        | logs in Azure        |
| retention period     | workspace            | Monitor is in        |
|                      |                      | PREVIE               |
|                      |                      | W[^3^](#fn3){#fnref3 |
|                      |                      | .footnote-ref        |
|                      |                      | role="doc-noteref"}. |
|                      |                      | Each table in the    |
|                      |                      | Log Analytics        |
|                      |                      | workspace must have  |
|                      |                      | archive periods      |
|                      |                      | applied.             |

| Threat Intelligence  | Australian Cyber     | The ACSC Threat      |
| Feeds                | Security Centre      | Intelligence Feed    |
|                      | (ACSC)               | will be configured   |
|                      |                      | to meet system       |
|                      |                      | security             |
|                      |                      | requirements.        |


## Data Connectors

### Reference - ICTAB Use Only

  ----------------------------------------------------------------------
  ICTAB Use    metadata
  ------------ ---------------------------------------------------------
  Content      

  Reference    
  URLs         

  What's New   

  Update       
  process      

  Author       

  Content      
  Owner        

  Last Update  

  Site Update  
  ----------------------------------------------------------------------

### Description

Data sources must be linked to a Microsoft Sentinel solution via data
connectors to begin ingesting data and streaming logs from required
services and applications.

### Considerations

Once data connectors have been deployed and sources linked, logs are
monitored using the in-built Azure Monitor Workbooks integrated with
Microsoft Sentinel. These data connectors allow an organisation's
administrators, security analysts, and security engineers to quickly
gain insights across ingested data as soon as a data source has been
connected.

Microsoft Sentinel supports several data connectors to provide real-time
integration, including:

**Azure Monitor Agent:**

Security Events

Windows Event Forwarding

Performance Counters

Windows Events

Sysmon

**Microsoft 365 Sources**[^4^](#fn4){#fnref4 .footnote-ref
role="doc-noteref"}**:**

Azure Active Directory (Azure AD) Activity Logs and Sign-in logs,

Microsoft 365 Defender, and

Office 365.

**Service to Service Connectors:**

In addition, non-Microsoft products seamlessly integrate with Microsoft
Sentinel through the available data sources below:

**Non-Microsoft Sources:**

Common Event Format (CEF),

Syslog,

Compatible third-party Software as a Service (SaaS) offerings, and

REST Application Programming Interfaces (API).

When implementing the Microsoft Sentinel pattern, thought should be put
into which Data Connector sources are required and which external
systems will be integrated with the solution.

### Decisions

The table below describes the Data Connectors pattern decisions.

Data Connector pattern decisions


| Decision Point       | Design Decision      | Justification        |
|----------------------|----------------------|----------------------|
| Default Sources      | Azure Active         | Default common data  |
|                      | Directory            | connectors that      |
|                      |                      | should be included   |
|                      | Microsoft 365        | in a Microsoft       |
|                      | Defender             | Sentinel deployment. |
|                      |                      |                      |
|                      | Azure Activity       |                      |
|                      |                      |                      |
|                      | Azure Key Vault      |                      |
|                      |                      |                      |
|                      | Azure Storage        |                      |
|                      | Account              |                      |
|                      |                      |                      |
|                      | Network Security     |                      |
|                      | Groups               |                      |

| Custom Sources       | Per project          | Additional data      |
|                      | requirement          | connectors should be |
|                      |                      | included as per each |
|                      |                      | implementer's        |
|                      |                      | requirements. These  |
|                      |                      | connectors may       |
|                      |                      | include events from  |
|                      |                      | a Syslog Forwarder,  |
|                      |                      | other cloud          |
|                      |                      | providers, Azure     |
|                      |                      | services or          |
|                      |                      | third-party          |
|                      |                      | applications.        |


## Workbooks

### Reference - ICTAB Use Only

  ----------------------------------------------------------------------
  ICTAB Use    metadata
  ------------ ---------------------------------------------------------
  Content      

  Reference    
  URLs         

  What's New   

  Update       
  process      

  Author       

  Content      
  Owner        

  Last Update  

  Site Update  
  ----------------------------------------------------------------------

### Description

Data ingested into Microsoft Sentinel can be visualised and monitored
using Azure Monitor Workbooks.

### Considerations

Microsoft Sentinel provides several built-in workbook templates to gain
insights across an organisation's data once connected. Custom workbooks
and dashboards can be created to suit an organisation's specific
requirements.

Microsoft offers a broad catalogue of the most commonly used workbooks
for Microsoft Sentinel, allowing system administrators or security
personnel to immediately begin analysing events generated from those
connected data sources[^5^](#fn5){#fnref5 .footnote-ref
role="doc-noteref"}.

### Decisions

The table below describes the Workbooks pattern decisions.

Workbook pattern decisions

  -----------------------------------------------------------------------
  Decision Point          Design Decision         Justification
  ----------------------- ----------------------- -----------------------
  Built-in Azure          Enabled                 The built-in Azure
  Workbooks                                       Workbooks provided by
                                                  Microsoft Sentinel
                                                  allow instant
                                                  visualisation and
                                                  analysis of the
                                                  ingested data sources.
                                                  The built-in workbooks
                                                  will be used in favour
                                                  of customised
                                                  workbooks.

  Custom Workbooks        Per project             Custom workbooks can be
                          requirements            created to meet project
                                                  business and security
                                                  requirements.
  -----------------------------------------------------------------------

## Threat Detection Rules

### Reference - ICTAB Use Only

  ----------------------------------------------------------------------
  ICTAB Use    metadata
  ------------ ---------------------------------------------------------
  Content      

  Reference    
  URLs         

  What's New   

  Update       
  process      

  Author       

  Content      
  Owner        

  Last Update  

  Site Update  
  ----------------------------------------------------------------------

### Description

Microsoft Sentinel leverages threat detection rules to alert system
administrators and security personnel as suspicious activity occurs
within an organisation's environment.

The built-in templates made available by Microsoft security experts and
analysts provide out-of-the-box threat detection rules based on known
threats, common attack vectors, and suspicious activity escalation
chains. Templates can be further customised to filter out or search for
additional activities according to specific organisational requirements.
Once enabled, these rules will automatically search for any suspicious
activity across the environment.

Alerts generated by these threat detection rules will automatically
generate incidents that can be assigned and investigated by the
appropriate personnel.

### Considerations

Microsoft Sentinel provides the following built-in detection
types[^6^](#fn6){#fnref6 .footnote-ref role="doc-noteref"}:

**Microsoft Security** -- Microsoft security analytics rules templates
automatically create incidents from alerts generated by Microsoft
security solutions, e.g., Microsoft Defender for Cloud.

**Scheduled Query Rules** -- Scheduled analytics rules are based on
built-in queries developed by Microsoft security experts. Query logic
can be updated to suit specific organisational requirements. Scheduled
rules templates are customisable, with query logic and scheduling
settings updatable to create new rules.

**Anomaly** -- Anomaly rules utilised machine learning (ML) to detect
specific types of abnormal behaviour. Each rule has unique parameters
and thresholds appropriate to the behaviour being analysed.

**Near-Real-Time (NRT)** -- NRT rules are a limited set of scheduled
rules designed to run once every minute to enable organisations to have
information as up-to-the-minute as possible.

**User and Entity Behaviour Analytics (UEBA)** -- The UEBA capabilities
in Microsoft Sentinel assist in providing actionable intelligence by
analysing collected logs and alerts from all connected data sources.
Based on the analysed data, baseline behavioural profiles of users,
hosts, Internet Protocol (IP) addresses, and applications are built.
Microsoft Sentinel uses machine learning and other techniques to
identify anomalous activity to detect if an asset has been compromised.

### Decisions

The table below describes the Threat Detection Rules pattern decisions.

Threat Detection Rules pattern decisions

  -----------------------------------------------------------------------
  Decision Point          Design Decision         Justification
  ----------------------- ----------------------- -----------------------
  Microsoft Security      Configured              Alerts generated in
  Analytics Rules                                 each Microsoft security
                                                  solution will
                                                  automatically create
                                                  incidents in Microsoft
                                                  Sentinel to provide a
                                                  single pane of glass
                                                  view.

  Scheduled Query Rules   Configured              The Microsoft Sentinel
                                                  provided templates will
                                                  be used to create
                                                  scheduled query rules
                                                  for each connected data
                                                  source.

  Anomaly Rules           Configured              The Microsoft Sentinel
                                                  provided templates will
                                                  be used to create
                                                  anomaly detection rules
                                                  for each connected data
                                                  source.

  Near-Real-Time          Configured              The Microsoft Sentinel
  Analytics Rules                                 provided templates will
                                                  be used to create
                                                  near-real-time rules
                                                  for each connected data
                                                  source.

  User and Entity         Configured              Microsoft Sentinel will
  Behaviour Analytics                             enable user and entity
                                                  behaviour analytics to
                                                  detect anomalous
                                                  behaviour and identity
                                                  advanced attacks.
  -----------------------------------------------------------------------

## Security Orchestration, Automation, and Response

### Reference - ICTAB Use Only

  ----------------------------------------------------------------------
  ICTAB Use    metadata
  ------------ ---------------------------------------------------------
  Content      

  Reference    
  URLs         

  What's New   

  Update       
  process      

  Author       

  Content      
  Owner        

  Last Update  

  Site Update  
  ----------------------------------------------------------------------

### Description

Microsoft Sentinel's orchestration, automation, and response solution,
built upon Azure Logic Apps, provides a scalable SOAR capability as new
technologies and threats emerge. Microsoft Sentinel leverages the
automation rule and playbook capabilities of Azure Logic Apps to respond
automatically and effectively to an organisation's security threats.

### Considerations

Automation rules enable administrators to manage the automation of
incident handling, streamlining automation use in Microsoft Sentinel and
simplifying complex workflows for an organisation's incident
orchestration processes.

Automation rules enable the assignment of playbooks to incidents and
simultaneously automate responses for multiple analytics rules,
automatically tag, assign, or close incidents without the need for
playbooks, and control the order of actions executed.

Playbooks are collections of response and remediation actions and logic
run from Microsoft Sentinel as a procedure.

Playbooks assist with the automation and orchestration of threat
responses and seamlessly integrate with other systems. Playbooks can be
configured to run automatically in response to specific alerts or
incidents triggered by a rule. Playbooks can be run manually on-demand
as needed in response to alerts.

SOAR integrations may include some or all the following components:

**Playbook templates** -- Playbook templates provide automated
workflows. Playbook templates are used to deploy pre-made playbooks for
automatically responding to threats.

**Azure Logic Apps Managed Connector** -- Managed Connectors enable
communication between playbooks, Microsoft, and Non-Microsoft services.

**Azure Logic Apps custom connector** -- Custom connectors enable
communication with unavailable services as prebuilt connectors by
defining specific triggers and actions.

**Microsoft Sentinel Connector** -- The Microsoft Sentinel Connector is
used for playbooks interacting with Microsoft Sentinel. The Microsoft
Sentinel connector in Logic Apps, and its component triggers and
actions, can be configured to operate on behalf of managed, Azure AD
user or Service Principal identities.

### Decisions

The table below describes the SOAR pattern decisions.

SOAR pattern decisions

  -----------------------------------------------------------------------
  Decision Point          Design Decision         Justification
  ----------------------- ----------------------- -----------------------
  Automation Rules        Per project             Automation rules will
                          requirements            be configured as part
                                                  of the system's ongoing
                                                  operation and
                                                  continuous improvement
                                                  or as defined by
                                                  project requirements.

  Automation Rules        Per project             As above, based on the
  Configuration           requirements            specific requirements
                                                  identified for each
                                                  rule.

  Permission Assignment   The project defined     The location of the
                          Azure Resource Group    deployed playbooks.

  Playbooks               Per project             Playbooks should be
                          requirements            configured as part of
                                                  the ongoing operation
                                                  and continuous system
                                                  improvement or as
                                                  defined by project
                                                  requirements.

  Playbook Configuration  Per project             As above, based on the
                          requirements            specific requirements
                                                  identified for each
                                                  playbook.
  -----------------------------------------------------------------------

## Role-Based Access Control

### Reference - ICTAB Use Only

  ----------------------------------------------------------------------
  ICTAB Use    metadata
  ------------ ---------------------------------------------------------
  Content      

  Reference    
  URLs         

  What's New   

  Update       
  process      

  Author       

  Content      
  Owner        

  Last Update  

  Site Update  
  ----------------------------------------------------------------------

### Description

Microsoft Sentinel leverages Azure Role-based Access Control (Azure
RBAC) to provide roles that can be assigned to users, groups, and
services in Azure.

### Considerations

Security operations teams should use Azure RBAC to grant the appropriate
level of access to the Microsoft Sentinel workspace based on their
members' specific functions. The built-in roles provide fine-grained
control over what users of Microsoft Sentinel can see and do. The Azure
roles can be assigned to the subscription, a resource group in which the
Microsoft Sentinel workspace resides, or directly to the Microsoft
Sentinel workspace.

All Microsoft Sentinel built-in roles provide read access to the data in
the Microsoft Sentinel workspace. The built-in roles and the access
provided are detailed below:

**Microsoft Sentinel Reader** -- View data, incidents, workbooks, and
other Microsoft Sentinel resources.

**Microsoft Sentinel Responder** -- Manage incidents, view data,
incidents, workbooks, and other Microsoft Sentinel resources.

**Microsoft Sentinel Contributor** -- Can create and edit workbooks,
analytics rules, and other Microsoft Sentinel resources. Incorporates
the Microsoft Sentinel Reader and Responder permissions.

**Microsoft Sentinel Automation Contributor** -- Add playbooks to
automation rules. It is not meant for user accounts.

The image below shows the relationship between users to each built-in
role for the solution.

![](media/image7.png){style="width:5.82639in;height:6.01166in"}

### Decisions

The table below describes the Role-Based Access Control pattern
decisions.

Role-Based Access Control pattern decisions


| Decision Point       | Design Decision      | Justification        |
|----------------------|----------------------|----------------------|
| Implement Role-Based | Configured           | Several groups will  |
| Management           |                      | be configured to     |
|                      |                      | avoid granting       |
|                      |                      | high-level           |
|                      |                      | administration       |
|                      |                      | access for           |
|                      |                      | day-to-day           |
|                      |                      | administrative       |
|                      |                      | functions. Roles and |
|                      |                      | permissions will be  |
|                      |                      | configured based on  |
|                      |                      | Microsoft            |
|                      |                      | recommendations for  |
|                      |                      | Microsoft Sentinel   |
|                      |                      | RBAC                 |
|                      |                      | .[^7^](#fn7){#fnref7 |
|                      |                      | .footnote-ref        |
|                      |                      | role="doc-noteref"}  |
|                      |                      | Roles are configured |
|                      |                      | to provide the least |
|                      |                      | privileges required  |
|                      |                      | to support business  |
|                      |                      | activities.          |

| RBAC Model           | Least Privilege      | Microsoft Sentinel   |
|                      |                      | built-in roles will  |
|                      |                      | be used in favour of |
|                      |                      | custom roles and     |
|                      |                      | advanced Azure RBAC  |
|                      |                      | to simplify          |
|                      |                      | management.          |
|                      |                      |                      |
|                      |                      | Azure custom roles   |
|                      |                      | using                |
|                      |                      | resource-context and |
|                      |                      | table-level RBAC     |
|                      |                      | will be implemented  |
|                      |                      | where required to    |
|                      |                      | provide granular     |
|                      |                      | access to specific   |
|                      |                      | data within the      |
|                      |                      | workspace.           |

| Microsoft Sentinel   | Refer to the table   | Required             |
| RBAC Configuration   | below                | configuration to     |
|                      |                      | support the          |
|                      |                      | solution.            |


Role-Based Access Control Configuration


| Role                 | Azure Role           | Description          |
|                      | Assignment           |                      |
|----------------------|----------------------|----------------------|
| Security Analysts    | Microsoft Sentinel   | View data,           |
|                      | Responder            | incidents,           |
|                      |                      | workbooks, and other |
|                      | Logic Apps           | Microsoft Sentinel   |
|                      | Contributor          | resources.           |
|                      |                      |                      |
|                      |                      | Manage incidents,    |
|                      |                      | such as assigning or |
|                      |                      | dismissing           |
|                      |                      | incidents.           |
|                      |                      |                      |
|                      |                      | Attach playbooks to  |
|                      |                      | analytics and        |
|                      |                      | automation rules and |
|                      |                      | run playbooks.       |
|                      |                      |                      |
|                      |                      | **Note:** This role  |
|                      |                      | also allows users to |
|                      |                      | modify playbooks.    |

| Security engineers   | Microsoft Sentinel   | View data,           |
|                      | Contributor          | incidents,           |
|                      |                      | workbooks, and other |
|                      | Logic Apps           | Microsoft Sentinel   |
|                      | Contributor          | resources.           |
|                      |                      |                      |
|                      |                      | Manage incidents,    |
|                      |                      | such as assigning or |
|                      |                      | dismissing           |
|                      |                      | incidents.           |
|                      |                      |                      |
|                      |                      | Create and edit      |
|                      |                      | workbooks, analytics |
|                      |                      | rules, and other     |
|                      |                      | Microsoft Sentinel   |
|                      |                      | resources.           |
|                      |                      |                      |
|                      |                      | Attach playbooks to  |
|                      |                      | analytics and        |
|                      |                      | automation rules and |
|                      |                      | run playbooks.       |
|                      |                      |                      |
|                      |                      | **Note:** This role  |
|                      |                      | also allows users to |
|                      |                      | modify playbooks.    |

| Sentinel Reader      | Microsoft Sentinel   | View data,           |
|                      | Read Only            | incidents,           |
|                      |                      | workbooks, and other |
|                      |                      | Microsoft Sentinel   |
|                      |                      | resources.           |

| Service Principal    | Microsoft Sentinel   | Automated            |
|                      | Contributor          | configuration for    |
|                      |                      | management tasks.    |


# Abbreviations and Acronyms

The below table describes the acronyms and abbreviations used in this
document

Acronyms and abbreviations

  -----------------------------------------------------------------------
  Acronym \\ Abbreviation    Meaning
  -------------------------- --------------------------------------------
  AATP                       Azure Advanced Threat Protection

  ACSC                       Australian Cyber Security Centre

  AD                         Active Directory

  AD FS                      Active Directory Federation Services

  AI                         Artificial Intelligence

  API                        Application Programming Interface

  ATP                        Advanced Threat Protection

  Azure AD                   Azure Active Directory

  CEF                        Common Event Format

  D365                       Dynamics 365

  HTTP                       Hypertext Transfer Protocol

  ID                         Identity

  IT                         Information Technology

  ITSM                       Information Technology Service Management

  ML                         Machine Learning

  NRT                        Near-real-time

  OS                         Operating System

  RBAC                       Role-Based Access Control

  SEM                        Security Event Manager

  SIEM                       Security Information and Event Management

  SOAR                       Security Orchestration, Automation, and
                             Response

  TBA                        To Be Advised

  TBD                        To Be Decided

  UEBA                       User and Entity Behaviour Analytics

  URL                        Uniform Resource Locator

  WEC                        Windows Event Collector

  WEF                        Windows Event Forwarding
  -----------------------------------------------------------------------

::: {#footnotes .section .footnotes .footnotes-end-of-document role="doc-endnotes"}

------------------------------------------------------------------------

1.  ::: {#fn1}
    For more information on Azure Monitor retention and archive policy
    refer to
    <https://docs.microsoft.com/en-au/azure/azure-monitor/logs/data-retention-archive>
    .[↩︎](#fnref1){.footnote-back role="doc-backlink"}
    :::

2.  ::: {#fn2}
    For more information on log data archive refer to
    <https://techcommunity.microsoft.com/t5/microsoft-sentinel-blog/ingest-archive-search-and-restore-data-in-microsoft-sentinel/ba-p/3195126>.[↩︎](#fnref2){.footnote-back
    role="doc-backlink"}
    :::

3.  ::: {#fn3}
    <https://docs.microsoft.com/en-us/azure/azure-monitor/logs/data-retention-archive?tabs=api-1%2Capi-2>[↩︎](#fnref3){.footnote-back
    role="doc-backlink"}
    :::

4.  ::: {#fn4}
    For more information on available data connectors and Microsoft
    Sentinel solutions refer to
    <https://docs.microsoft.com/en-au/azure/sentinel/data-connectors-reference>
    and
    <https://docs.microsoft.com/en-au/azure/sentinel/sentinel-solutions-catalog>[↩︎](#fnref4){.footnote-back
    role="doc-backlink"}
    :::

5.  ::: {#fn5}
    For more information on the available workbooks refer to
    <https://docs.microsoft.com/en-au/azure/sentinel/top-workbooks>[↩︎](#fnref5){.footnote-back
    role="doc-backlink"}
    :::

6.  ::: {#fn6}
    For more information on the built-in threat detections refer to
    <https://docs.microsoft.com/en-au/azure/sentinel/detect-threats-built-in>[↩︎](#fnref6){.footnote-back
    role="doc-backlink"}
    :::

7.  ::: {#fn7}
    For more information refer to
    <https://docs.microsoft.com/en-au/azure/sentinel/roles>[↩︎](#fnref7){.footnote-back
    role="doc-backlink"}
    :::
:::
