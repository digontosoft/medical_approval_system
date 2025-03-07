import React, { useState, useMemo } from 'react';
import { BarChart, PieChart, LineChart, Activity, ArrowUp, ArrowDown, Search } from 'lucide-react';
import { Chart as ChartJS, ArcElement, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Pie, Bar } from 'react-chartjs-2';

ChartJS.register(ArcElement, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Statistics: React.FC = () => {
  const [activeTab, setActiveTab] = useState('specialty');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortConfig, setSortConfig] = useState<{ key: string; direction: 'ascending' | 'descending' } | null>(null);

  const tabs = [
    { id: 'specialty', label: 'Specialties', icon: <PieChart className="h-5 w-5" /> },
    { id: 'impact', label: 'Impact Analysis', icon: <PieChart className="h-5 w-5" /> },
    { id: 'clarity', label: 'Process Clarity', icon: <BarChart className="h-5 w-5" /> },
    { id: 'challenges', label: 'Key Challenges', icon: <Activity className="h-5 w-5" /> },
    { id: 'awareness', label: 'Process Awareness', icon: <PieChart className="h-5 w-5" /> }
  ];

  // Calculate specialty distribution
  const specialtyData = {
    labels: [
      'Pediatrics (21.4%)',
      'Neurology (11.4%)',
      'Orthopedics (11.4%)',
      'Dermatology (10%)',
      'Endocrinology (8.6%)',
      'General Medicine (8.6%)',
      'Gynecology (8.6%)',
      'Radiology (8.6%)',
      'Cardiology (5.7%)',
      'Oncology (5.7%)'
    ],
    datasets: [{
      data: [15, 8, 8, 7, 6, 6, 6, 6, 4, 4],
      backgroundColor: [
        'rgba(255, 99, 132, 0.8)',
        'rgba(54, 162, 235, 0.8)',
        'rgba(255, 206, 86, 0.8)',
        'rgba(75, 192, 192, 0.8)',
        'rgba(153, 102, 255, 0.8)',
        'rgba(255, 159, 64, 0.8)',
        'rgba(255, 99, 255, 0.8)',
        'rgba(54, 162, 64, 0.8)',
        'rgba(255, 206, 192, 0.8)',
        'rgba(75, 192, 255, 0.8)',
      ],
      borderColor: '#ffffff',
      borderWidth: 2,
    }]
  };

  // Calculate impact distribution
  const impactData = {
    labels: [
      'Very Positive Impact (22.5%)',
      'Somewhat Positive Impact (15%)',
      'Neutral (15%)',
      'Somewhat Negative Impact (26.3%)',
      'Very Negative Impact (21.3%)'
    ],
    datasets: [{
      data: [22.5, 15, 15, 26.3, 21.3],
      backgroundColor: [
        'rgba(34, 197, 94, 0.8)',
        'rgba(74, 222, 128, 0.8)',
        'rgba(156, 163, 175, 0.8)',
        'rgba(252, 165, 165, 0.8)',
        'rgba(239, 68, 68, 0.8)',
      ],
      borderColor: '#ffffff',
      borderWidth: 2,
    }]
  };

  // Calculate process clarity
  const clarityData = {
    labels: [
      'Very Clear (20%)',
      'Clear (22.5%)',
      'Neutral (16.25%)',
      'Unclear (17.5%)',
      'Very Unclear (23.75%)'
    ],
    datasets: [{
      data: [20, 22.5, 16.25, 17.5, 23.75],
      backgroundColor: [
        'rgba(34, 197, 94, 0.8)',
        'rgba(74, 222, 128, 0.8)',
        'rgba(156, 163, 175, 0.8)',
        'rgba(252, 165, 165, 0.8)',
        'rgba(239, 68, 68, 0.8)',
      ],
      borderColor: '#ffffff',
      borderWidth: 2,
    }]
  };

  // Calculate awareness distribution
  const awarenessData = {
    labels: ['Yes (56%)', 'No (44%)'],
    datasets: [{
      data: [56, 44],
      backgroundColor: [
        'rgba(34, 197, 94, 0.8)',
        'rgba(239, 68, 68, 0.8)',
      ],
      borderColor: '#ffffff',
      borderWidth: 2,
    }]
  };

  // Top challenges
  const challengesData = {
    labels: [
      'Post-Approval Monitoring (27.3%)',
      'Communication with Developers (26.7%)',
      'Speed of Approval (23%)',
      'Transparency (23%)'
    ],
    datasets: [{
      data: [27.3, 26.7, 23, 23],
      backgroundColor: [
        'rgba(34, 197, 94, 0.8)',
        'rgba(74, 222, 128, 0.8)',
        'rgba(156, 163, 175, 0.8)',
        'rgba(252, 165, 165, 0.8)'
      ],
      borderColor: '#ffffff',
      borderWidth: 2
    }]
  };

  const pieOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'right' as const,
        labels: {
          font: {
            size: 12
          }
        }
      },
      tooltip: {
        callbacks: {
          label: function (context: any) {
            const label = context.label || '';
            const value = context.raw || 0;
            return `${label}: ${value}%`;
          }
        }
      }
    }
  };

  // Sorting function for table data - FIXED to prevent infinite re-renders
  const requestSort = (key: string) => {
    let direction: 'ascending' | 'descending' = 'ascending';

    if (sortConfig && sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }

    setSortConfig({ key, direction });
  };

  // Create table data for each tab
  const getImpactTableData = () => [
    { response: 'Very Positive Impact', medical: '14%', technical: '8.5%' },
    { response: 'Somewhat Positive Impact', medical: '9%', technical: '6%' },
    { response: 'Neutral', medical: '10%', technical: '5%' },
    { response: 'Somewhat Negative Impact', medical: '17%', technical: '9.3%' },
    { response: 'Very Negative Impact', medical: '14%', technical: '7.3%' }
  ];

  const getClarityTableData = () => [
    { response: 'Very Clear', medical: '15%', technical: '5%' },
    { response: 'Clear', medical: '17%', technical: '5.5%' },
    { response: 'Neutral', medical: '10%', technical: '6.25%' },
    { response: 'Unclear', medical: '12%', technical: '5.5%' },
    { response: 'Very Unclear', medical: '18%', technical: '5.75%' }
  ];

  const getChallengesTableData = () => [
    { response: 'Transparency', medical: '15%', technical: '8%' },
    { response: 'Speed of Approval', medical: '14%', technical: '9%' },
    { response: 'Communication with Developers', medical: '16%', technical: '10.7%' },
    { response: 'Post-Approval Monitoring', medical: '18%', technical: '9.3%' }
  ];

  const getAwarenessTableData = () => [
    { response: 'Yes', medical: '40%', technical: '16%' },
    { response: 'No', medical: '30%', technical: '14%' }
  ];

  // Get the appropriate table data based on active tab
  const getTableData = () => {
    switch (activeTab) {
      case 'impact': return getImpactTableData();
      case 'clarity': return getClarityTableData();
      case 'challenges': return getChallengesTableData();
      case 'awareness': return getAwarenessTableData();
      default: return [];
    }
  };

  // Filter and sort table data
  const filteredAndSortedData = useMemo(() => {
    const tableData = getTableData();

    // Filter by search term
    const filtered = tableData.filter(row =>
      row.response.toLowerCase().includes(searchTerm.toLowerCase()) ||
      row.medical.toLowerCase().includes(searchTerm.toLowerCase()) ||
      row.technical.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Sort if sort config exists
    if (sortConfig !== null) {
      return [...filtered].sort((a, b) => {
        // Convert percentages to numbers for proper sorting
        const valueA = typeof a[sortConfig.key as keyof typeof a] === 'string' && a[sortConfig.key as keyof typeof a].includes('%')
          ? parseFloat(a[sortConfig.key as keyof typeof a])
          : a[sortConfig.key as keyof typeof a];
        const valueB = typeof b[sortConfig.key as keyof typeof b] === 'string' && b[sortConfig.key as keyof typeof b].includes('%')
          ? parseFloat(b[sortConfig.key as keyof typeof b])
          : b[sortConfig.key as keyof typeof b];

        if (valueA < valueB) return sortConfig.direction === 'ascending' ? -1 : 1;
        if (valueA > valueB) return sortConfig.direction === 'ascending' ? 1 : -1;
        return 0;
      });
    }

    return filtered;
  }, [activeTab, searchTerm, sortConfig]);

  // Render sortable table
  const renderSortableTable = (tableTitle: string, medicalLabel: string = 'Medical Teams', technicalLabel: string = 'Technical Teams') => {
    if (!['impact', 'clarity', 'challenges', 'awareness'].includes(activeTab)) return null;

    return (
      <div className="mt-8">
        <h4 className="text-lg font-semibold mb-4">{tableTitle}</h4>

        <div className="mb-4 relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Search table..."
            className="pl-10 pr-4 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-teal-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="overflow-x-auto shadow-md rounded-lg">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100"
                  onClick={() => requestSort('response')}
                >
                  <div className="flex items-center">
                    <span>Response</span>
                    {sortConfig?.key === 'response' && (
                      sortConfig.direction === 'ascending'
                        ? <ArrowUp className="h-4 w-4 ml-1" />
                        : <ArrowDown className="h-4 w-4 ml-1" />
                    )}
                  </div>
                </th>
                <th
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100"
                  onClick={() => requestSort('medical')}
                >
                  <div className="flex items-center">
                    <span>{medicalLabel}</span>
                    {sortConfig?.key === 'medical' && (
                      sortConfig.direction === 'ascending'
                        ? <ArrowUp className="h-4 w-4 ml-1" />
                        : <ArrowDown className="h-4 w-4 ml-1" />
                    )}
                  </div>
                </th>
                <th
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100"
                  onClick={() => requestSort('technical')}
                >
                  <div className="flex items-center">
                    <span>{technicalLabel}</span>
                    {sortConfig?.key === 'technical' && (
                      sortConfig.direction === 'ascending'
                        ? <ArrowUp className="h-4 w-4 ml-1" />
                        : <ArrowDown className="h-4 w-4 ml-1" />
                    )}
                  </div>
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredAndSortedData.length > 0 ? (
                filteredAndSortedData.map((row, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{row.response}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{row.medical}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{row.technical}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={3} className="px-6 py-4 text-center text-sm text-gray-500">
                    No results found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    );
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'specialty':
        return (
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Distribution by Medical Specialty</h3>
            <div className="h-[400px] relative">
              <Pie data={specialtyData} options={pieOptions} />
            </div>
            <div className="mt-6">
              <p className="text-sm text-gray-600">
                Total Respondents: 80 medical professionals
              </p>
            </div>
          </div>
        );

      case 'impact':
        return (
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Impact on Software Quality</h3>
            <div className="h-[400px] relative">
              <Pie data={impactData} options={pieOptions} />
            </div>
            {renderSortableTable('Response Distribution by Team Type')}
          </div>
        );

      case 'clarity':
        return (
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Clarity of the Approval Process</h3>
            <div className="h-[400px] relative">
              <Pie data={clarityData} options={pieOptions} />
            </div>
            {renderSortableTable('Response Distribution by Team Type')}
          </div>
        );

      case 'challenges':
        return (
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Key Areas for Improvement</h3>
            <div className="h-[400px] relative">
              <Pie data={challengesData} options={pieOptions} />
            </div>
            {renderSortableTable('Response Distribution by Team Type')}
          </div>
        );

      case 'awareness':
        return (
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Usage of Approved Medical Software</h3>
            <div className="h-[400px] relative">
              <Pie data={awarenessData} options={pieOptions} />
            </div>
            {renderSortableTable('Response Distribution by Team Type', 'Medical Teams', 'Software Teams')}
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Survey Results Analysis</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Analysis of responses from 80 medical professionals across various specialties regarding the medical approval system in Bangladesh.
        </p>
      </div>

      <div className="mb-6">
        <div className="flex flex-wrap border-b border-gray-200">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`inline-flex items-center px-4 py-3 text-sm font-medium ${activeTab === tab.id
                ? 'border-b-2 border-teal-600 text-teal-600'
                : 'text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
            >
              {tab.icon}
              <span className="ml-2">{tab.label}</span>
            </button>
          ))}
        </div>
      </div>

      {renderTabContent()}

      <div className="mt-12 bg-gray-50 p-6 rounded-lg shadow-sm">
        <h3 className="text-xl font-semibold mb-4">Survey Methodology</h3>
        <p className="text-gray-600">
          Data collected from 80 medical professionals across various specialties in Bangladesh. The survey focused on understanding the current medical approval system, its impact on healthcare delivery, and areas for improvement.
        </p>
      </div>
    </div>
  );
};

export default Statistics;