"use client";

import {
  Menu,
  LogOut,
  Moon,
  Sun,
  MessageCircle,
  BarChart3,
  Home,
  Ticket,
  CheckCircle,
  Building2,
  Calendar,
  FileText,
  Settings,
  Database,
  X,
  Send,
} from "lucide-react";
import { useState } from "react";

export default function DemoPage() {
  const [activeTab, setActiveTab] = useState("home");
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [darkMode, setDarkMode] = useState(true);
  const [chatOpen, setChatOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: "ai",
      text: "Hello! I'm your AI assistant. How can I help you today?",
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [showCTAModal, setShowCTAModal] = useState(false);

  const menuItems = [
    { id: "home", label: "Home", icon: Home },
    { id: "tickets", label: "Tickets", icon: Ticket },
    { id: "approvals", label: "Approvals", icon: CheckCircle },
    { id: "properties", label: "Properties", icon: Building2 },
    { id: "calendar", label: "Calendar", icon: Calendar },
    { id: "reports", label: "Reports", icon: BarChart3 },
    { id: "audit", label: "Audit Logs", icon: FileText },
    { id: "memory", label: "Memory", icon: Database },
  ];

  // Helper function to get conditional classes based on theme
  const getThemeClass = (darkClass, lightClass) =>
    darkMode ? darkClass : lightClass;
  const textColor = getThemeClass("text-white", "text-slate-900");
  const secondaryTextColor = getThemeClass("text-slate-400", "text-slate-600");
  const tertiaryTextColor = getThemeClass("text-slate-300", "text-slate-700");
  const cardBg = getThemeClass("bg-slate-800/50", "bg-slate-100");
  const cardBorder = getThemeClass("border-slate-700", "border-slate-300");
  const inputBg = getThemeClass("bg-slate-800/50", "bg-slate-100");
  const tableHeaderBg = getThemeClass("bg-slate-900/50", "bg-slate-200");
  const tableBorder = getThemeClass("border-slate-700", "border-slate-300");
  const tableRowHover = getThemeClass(
    "hover:bg-slate-700/30",
    "hover:bg-slate-200/50",
  );

  const handleSendMessage = () => {
    if (inputValue.trim()) {
      setShowCTAModal(true);
      setInputValue("");
    }
  };

  // Home Dashboard Content
  const HomeDashboard = () => (
    <div className="space-y-6">
      <h1 className={`text-3xl font-bold ${textColor}`}>Dashboard</h1>
      <p className={secondaryTextColor}>
        AI Internal Automation Dashboard - Real-time metrics and status overview
      </p>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        <MetricCard
          title="Open Tickets"
          value="23"
          subtitle="Active support tickets"
          darkMode={darkMode}
          color="blue"
        />
        <MetricCard
          title="High Priority"
          value="5"
          subtitle="Urgent items requiring attention"
          darkMode={darkMode}
          color="red"
        />
        <MetricCard
          title="SLA At Risk"
          value="3"
          subtitle="Tasks approaching deadline"
          darkMode={darkMode}
          color="yellow"
        />
        <MetricCard
          title="Pending Approvals"
          value="4"
          subtitle="Awaiting authorization"
          darkMode={darkMode}
          color="yellow"
        />
        <MetricCard
          title="Today's Appointments"
          value="6"
          subtitle="Scheduled meetings"
          darkMode={darkMode}
          color="green"
        />
      </div>

      {/* Summary Section */}
      <div className={`${cardBg} p-6 rounded-lg border ${cardBorder}`}>
        <h2 className={`text-xl font-semibold ${textColor} mb-4`}>
          Today's Ops Summary
        </h2>
        <p className={`${tertiaryTextColor} text-sm mb-3`}>
          Current operational status and alerts
        </p>
        <ul className={`space-y-2 ${tertiaryTextColor} text-sm`}>
          <li>• 5 new maintenance tickets</li>
          <li>• 2 refunds pending approval</li>
          <li>• Unit 4B leak needs escalation</li>
          <li>• SLA risk on ticket #1823</li>
        </ul>
      </div>

      {/* Action Lists */}
      <div className="grid md:grid-cols-3 gap-6">
        <ActionListSection
          title="My Tickets"
          items={myTickets}
          darkMode={darkMode}
        />
        <ActionListSection
          title="Approvals Waiting"
          items={approvalsWaiting}
          darkMode={darkMode}
        />
        <ActionListSection
          title="Urgent Issues"
          items={urgentIssues}
          darkMode={darkMode}
        />
      </div>

      {/* Recent Activity */}
      <div className={`${cardBg} p-6 rounded-lg border ${cardBorder}`}>
        <h2 className={`text-lg font-semibold ${textColor} mb-4`}>
          Recent Activity
        </h2>
        <p className={secondaryTextColor}>
          No recent activity to display. All systems operating normally.
        </p>
      </div>
    </div>
  );

  // Tickets Content
  const TicketsContent = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className={`text-3xl font-bold ${textColor}`}>Tickets</h1>
        <button
          onClick={() => setShowCTAModal(true)}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm transition"
        >
          New Ticket
        </button>
      </div>
      <p className={secondaryTextColor}>Manage and track all support tickets</p>

      {/* Filters */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        <FilterSelect
          label="Status"
          options={["All", "Open", "In Progress", "Closed"]}
          darkMode={darkMode}
        />
        <FilterSelect
          label="Priority"
          options={["All", "High", "Medium", "Low"]}
          darkMode={darkMode}
        />
        <FilterSelect
          label="Type"
          options={["All", "Task", "Maintenance", "Complaint"]}
          darkMode={darkMode}
        />
        <FilterSelect
          label="Property"
          options={["All Properties", "1200 Monroe St", "1106 Monroe St"]}
          darkMode={darkMode}
        />
        <FilterSelect
          label="SLA Risk"
          options={["All", "At Risk", "OK"]}
          darkMode={darkMode}
        />
      </div>

      {/* Tickets Table */}
      <div
        className={`overflow-x-auto ${cardBg} rounded-lg border ${cardBorder}`}
      >
        <table className="w-full text-sm">
          <thead className={`border-b ${tableBorder}`}>
            <tr className={tableHeaderBg}>
              <th
                className={`px-4 py-3 text-left ${tertiaryTextColor} font-semibold`}
              >
                ID
              </th>
              <th
                className={`px-4 py-3 text-left ${tertiaryTextColor} font-semibold`}
              >
                Property
              </th>
              <th
                className={`px-4 py-3 text-left ${tertiaryTextColor} font-semibold`}
              >
                Type
              </th>
              <th
                className={`px-4 py-3 text-left ${tertiaryTextColor} font-semibold`}
              >
                Issue
              </th>
              <th
                className={`px-4 py-3 text-left ${tertiaryTextColor} font-semibold`}
              >
                Priority
              </th>
              <th
                className={`px-4 py-3 text-left ${tertiaryTextColor} font-semibold`}
              >
                Assigned
              </th>
              <th
                className={`px-4 py-3 text-left ${tertiaryTextColor} font-semibold`}
              >
                Status
              </th>
            </tr>
          </thead>
          <tbody className={`divide-y ${tableBorder}`}>
            {ticketsData.map((ticket) => (
              <tr key={ticket.id} className={tableRowHover}>
                <td className={`px-4 py-3 ${tertiaryTextColor} font-medium`}>
                  {ticket.id}
                </td>
                <td className={`px-4 py-3 ${tertiaryTextColor}`}>
                  {ticket.property}
                </td>
                <td className={`px-4 py-3 ${tertiaryTextColor}`}>
                  {ticket.type}
                </td>
                <td
                  className={`px-4 py-3 ${tertiaryTextColor} max-w-xs truncate`}
                >
                  {ticket.issue}
                </td>
                <td className="px-4 py-3">
                  <span
                    className={`px-2 py-1 rounded text-xs font-semibold ${
                      ticket.priority === "high"
                        ? darkMode
                          ? "bg-red-600/20 text-red-300"
                          : "bg-red-100 text-red-700"
                        : darkMode
                          ? "bg-yellow-600/20 text-yellow-300"
                          : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    {ticket.priority}
                  </span>
                </td>
                <td className={`px-4 py-3 ${tertiaryTextColor}`}>
                  {ticket.assigned}
                </td>
                <td className="px-4 py-3">
                  <span
                    className={`px-2 py-1 rounded text-xs font-semibold ${
                      ticket.status === "in_progress"
                        ? darkMode
                          ? "bg-blue-600/20 text-blue-300"
                          : "bg-blue-100 text-blue-700"
                        : darkMode
                          ? "bg-slate-600/20 text-slate-300"
                          : "bg-slate-200 text-slate-700"
                    }`}
                  >
                    {ticket.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className={secondaryTextColor}>Showing 11 of 11 tickets</p>
    </div>
  );

  // Approvals Content
  const ApprovalsContent = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className={`text-3xl font-bold ${textColor}`}>Approvals</h1>
        <button
          onClick={() => setShowCTAModal(true)}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm transition"
        >
          New Approval
        </button>
      </div>
      <p className={secondaryTextColor}>
        Review and manage financial approvals
      </p>

      {/* Approval Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <MetricCard
          title="Pending Approvals"
          value="4"
          subtitle="Awaiting review"
          darkMode={darkMode}
          color="yellow"
        />
        <MetricCard
          title="Financial Impact"
          value="$600"
          subtitle="Total amount pending"
          darkMode={darkMode}
          color="green"
        />
        <MetricCard
          title="Overdue Decisions"
          value="4"
          subtitle="Past deadline"
          darkMode={darkMode}
          color="red"
        />
      </div>

      {/* Approvals Table */}
      <div
        className={`overflow-x-auto ${cardBg} rounded-lg border ${cardBorder}`}
      >
        <table className="w-full text-sm">
          <thead className={`border-b ${tableBorder}`}>
            <tr className={tableHeaderBg}>
              <th
                className={`px-4 py-3 text-left ${tertiaryTextColor} font-semibold`}
              >
                ID
              </th>
              <th
                className={`px-4 py-3 text-left ${tertiaryTextColor} font-semibold`}
              >
                Type
              </th>
              <th
                className={`px-4 py-3 text-left ${tertiaryTextColor} font-semibold`}
              >
                Property
              </th>
              <th
                className={`px-4 py-3 text-left ${tertiaryTextColor} font-semibold`}
              >
                Amount
              </th>
              <th
                className={`px-4 py-3 text-left ${tertiaryTextColor} font-semibold`}
              >
                Requested By
              </th>
              <th
                className={`px-4 py-3 text-left ${tertiaryTextColor} font-semibold`}
              >
                Status
              </th>
            </tr>
          </thead>
          <tbody className={`divide-y ${tableBorder}`}>
            {approvalsData.map((approval) => (
              <tr key={approval.id} className={tableRowHover}>
                <td
                  className={`px-4 py-3 ${tertiaryTextColor} font-mono text-xs`}
                >
                  {approval.id}
                </td>
                <td className={`px-4 py-3 ${tertiaryTextColor}`}>
                  {approval.type}
                </td>
                <td className={`px-4 py-3 ${tertiaryTextColor}`}>
                  {approval.property}
                </td>
                <td className={`px-4 py-3 ${tertiaryTextColor} font-semibold`}>
                  {approval.amount}
                </td>
                <td className={`px-4 py-3 ${tertiaryTextColor}`}>
                  {approval.requestedBy}
                </td>
                <td className="px-4 py-3">
                  <span
                    className={`px-2 py-1 rounded text-xs font-semibold ${
                      approval.status === "Pending"
                        ? darkMode
                          ? "bg-yellow-600/20 text-yellow-300"
                          : "bg-yellow-100 text-yellow-700"
                        : darkMode
                          ? "bg-green-600/20 text-green-300"
                          : "bg-green-100 text-green-700"
                    }`}
                  >
                    {approval.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  if (showCTAModal) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center">
        <div
          className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          onClick={() => setShowCTAModal(false)}
        />

        <div
          className={`relative max-w-md w-full mx-4 p-8 rounded-2xl ${
            darkMode
              ? "bg-slate-900 border border-slate-700"
              : "bg-white border border-slate-200"
          } shadow-2xl`}
        >
          <button
            onClick={() => setShowCTAModal(false)}
            className={`absolute top-4 right-4 p-2 rounded-lg transition ${
              darkMode
                ? "hover:bg-slate-800 text-slate-400"
                : "hover:bg-slate-100 text-slate-600"
            }`}
            title="Close"
          >
            <X size={20} />
          </button>

          <div className="text-center space-y-4">
            <div className="text-4xl mb-3">🎯</div>
            <h2
              className={`text-2xl font-bold ${darkMode ? "text-white" : "text-slate-900"}`}
            >
              See This In Action
            </h2>

            <p
              className={`text-base leading-relaxed ${
                darkMode ? "text-slate-300" : "text-slate-700"
              }`}
            >
              This is a live demo showcasing what's possible. To see how it
              works with your real data and get a personalized walkthrough,
              schedule a call with our team.
            </p>

            <div
              className={`p-4 rounded-lg ${
                darkMode
                  ? "bg-blue-600/10 border border-blue-600/30"
                  : "bg-blue-50 border border-blue-200"
              }`}
            >
              <p
                className={`text-sm font-medium ${
                  darkMode ? "text-blue-300" : "text-blue-700"
                }`}
              >
                ✨ Discover how we can automate your property operations and
                save you hours every week
              </p>
            </div>

            <div className="pt-4 space-y-3">
              <a
                href="/form"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition shadow-lg"
              >
                Schedule a Call
              </a>
              <button
                onClick={() => setShowCTAModal(false)}
                className={`w-full py-3 rounded-lg font-medium transition ${
                  darkMode
                    ? "bg-slate-800 hover:bg-slate-700 text-slate-200"
                    : "bg-slate-100 hover:bg-slate-200 text-slate-900"
                }`}
              >
                Continue Exploring Demo
              </button>
            </div>

            <p
              className={`text-xs ${darkMode ? "text-slate-500" : "text-slate-500"}`}
            >
              No credit card required • 15-minute call
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        darkMode ? "bg-slate-950 text-slate-50" : "bg-slate-100 text-slate-900"
      }`}
    >
      <nav
        className={`fixed top-0 w-full backdrop-blur-md z-40 border-b transition-colors duration-300 ${
          darkMode
            ? "bg-slate-900/80 border-slate-800"
            : "bg-white/90 border-slate-300"
        }`}
      >
        <div className="px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className={`p-2 rounded-lg transition ${
                darkMode
                  ? "hover:bg-slate-800 text-slate-50"
                  : "hover:bg-slate-200 text-slate-900"
              }`}
            >
              <Menu size={24} />
            </button>
            <h1
              className={`text-xl font-bold ${darkMode ? "text-white" : "text-slate-900"}`}
            >
              AI Ops
            </h1>
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2 rounded-lg transition ${
                darkMode
                  ? "hover:bg-slate-800 text-slate-50"
                  : "hover:bg-slate-200 text-slate-900"
              }`}
              title={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
            >
              {darkMode ? <Moon size={20} /> : <Sun size={20} />}
            </button>
            <button
              onClick={() => setChatOpen(!chatOpen)}
              className={`p-2 rounded-lg transition relative ${
                darkMode
                  ? "hover:bg-slate-800 text-slate-50"
                  : "hover:bg-slate-200 text-slate-900"
              }`}
              title="Open Chat"
            >
              <MessageCircle size={20} />
              {chatOpen && (
                <div className="absolute top-1 right-1 w-2 h-2 bg-blue-400 rounded-full"></div>
              )}
            </button>
            <button
              className={`p-2 rounded-lg transition ${darkMode ? "hover:bg-slate-800 text-red-400" : "hover:bg-slate-200 text-red-500"}`}
            >
              <LogOut size={20} />
            </button>
          </div>
        </div>
      </nav>

      <aside
        className={`fixed left-0 top-16 h-[calc(100vh-64px)] w-64 transition-transform duration-300 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } z-30 ${
          darkMode
            ? "bg-slate-900/50 border-slate-800"
            : "bg-slate-50 border-slate-200"
        } border-r`}
      >
        <div className="p-4 space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition ${
                  activeTab === item.id
                    ? darkMode
                      ? "bg-blue-600/20 text-blue-300 border border-blue-600/50"
                      : "bg-blue-100 text-blue-900 border border-blue-600"
                    : darkMode
                      ? "text-slate-300 hover:bg-slate-800/50"
                      : "text-slate-700 hover:bg-slate-200"
                }`}
              >
                <Icon size={20} />
                <span className="text-sm font-medium">{item.label}</span>
              </button>
            );
          })}
        </div>
      </aside>

      <main
        className={`pt-20 transition-all duration-300 ${sidebarOpen ? "ml-64" : "ml-0"}`}
      >
        <div className="max-w-7xl mx-auto px-6 py-8">
          {activeTab === "home" && <HomeDashboard />}
          {activeTab === "tickets" && <TicketsContent />}
          {activeTab === "approvals" && <ApprovalsContent />}
          {activeTab === "properties" && (
            <PropertiesContent
              darkMode={darkMode}
              onAction={() => setShowCTAModal(true)}
            />
          )}
          {activeTab === "calendar" && (
            <CalendarContent
              darkMode={darkMode}
              onAction={() => setShowCTAModal(true)}
            />
          )}
          {activeTab === "reports" && <ReportsContent darkMode={darkMode} />}
          {activeTab === "audit" && <AuditContent darkMode={darkMode} />}
          {activeTab === "memory" && <MemoryContent darkMode={darkMode} />}
        </div>
      </main>

      {/* Back to Home Button */}
      <div className="fixed bottom-6 right-6">
        <a
          href="/"
          className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition shadow-lg"
        >
          ← Back to Home
        </a>
      </div>

      {/* Chat Sidebar */}
      <aside
        className={`fixed right-0 top-16 h-[calc(100vh-64px)] w-80 transition-transform duration-300 ${
          chatOpen ? "translate-x-0" : "translate-x-full"
        } z-40 ${
          darkMode
            ? "bg-slate-900 border-slate-800"
            : "bg-white border-slate-200"
        } border-l flex flex-col shadow-2xl`}
      >
        {/* Chat Header */}
        <div
          className={`p-4 border-b ${
            darkMode ? "border-slate-800" : "border-slate-200"
          } flex justify-between items-center`}
        >
          <h2
            className={`font-semibold ${
              darkMode ? "text-white" : "text-slate-900"
            }`}
          >
            AI Assistant
          </h2>
          <button
            onClick={() => setChatOpen(false)}
            className={`p-1 rounded hover:opacity-70 transition`}
          >
            <X size={20} />
          </button>
        </div>

        {/* Messages Container */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-xs px-4 py-2 rounded-lg ${
                  msg.sender === "user"
                    ? "bg-blue-600 text-white rounded-br-none"
                    : darkMode
                      ? "bg-slate-800 text-slate-200 rounded-bl-none"
                      : "bg-slate-100 text-slate-900 rounded-bl-none"
                }`}
              >
                <p className="text-sm">{msg.text}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Input Area */}
        <div
          className={`p-4 border-t ${
            darkMode ? "border-slate-800" : "border-slate-200"
          }`}
        >
          <div className="flex gap-2">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onFocus={() => setShowCTAModal(true)}
              placeholder="Ask me anything..."
              className={`flex-1 px-3 py-2 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 ${
                darkMode
                  ? "bg-slate-800 border border-slate-700 text-white placeholder-slate-500"
                  : "bg-slate-100 border border-slate-300 text-slate-900 placeholder-slate-500"
              }`}
            />
            <button
              onClick={handleSendMessage}
              className="p-2 bg-blue-600 hover:bg-blue-700 text-white rounded transition"
              title="Send message"
            >
              <Send size={16} />
            </button>
          </div>
        </div>
      </aside>
    </div>
  );
}

// Component: MetricCard
function MetricCard({ title, value, subtitle, darkMode, color }) {
  const colorConfig = {
    red: {
      bg: "bg-red-600/20 border-red-600/50",
      text: "text-red-300",
      dark: "bg-red-100 border-red-300 text-red-700",
    },
    yellow: {
      bg: "bg-yellow-600/20 border-yellow-600/50",
      text: "text-yellow-300",
      dark: "bg-yellow-100 border-yellow-300 text-yellow-700",
    },
    green: {
      bg: "bg-green-600/20 border-green-600/50",
      text: "text-green-300",
      dark: "bg-green-100 border-green-300 text-green-700",
    },
    blue: {
      bg: "bg-blue-600/20 border-blue-600/50",
      text: "text-blue-300",
      dark: "bg-blue-100 border-blue-300 text-blue-700",
    },
  };

  const colorStyle = color && colorConfig[color];
  const bgClass = colorStyle
    ? darkMode
      ? colorStyle.bg
      : colorStyle.dark
    : darkMode
      ? "bg-slate-800/50 border-slate-700"
      : "bg-slate-100 border-slate-300";

  return (
    <div className={`${bgClass} p-4 rounded-lg border`}>
      <p
        className={`${darkMode ? "text-slate-400" : "text-slate-600"} text-sm font-medium`}
      >
        {title}
      </p>
      <p
        className={`text-2xl font-bold ${darkMode ? "text-white" : "text-slate-900"} mt-2`}
      >
        {value}
      </p>
      <p
        className={`${darkMode ? "text-slate-500" : "text-slate-600"} text-xs mt-1`}
      >
        {subtitle}
      </p>
    </div>
  );
}

// Component: ActionListSection
function ActionListSection({ title, items, darkMode }) {
  return (
    <div
      className={`${darkMode ? "bg-slate-800/50 border-slate-700" : "bg-slate-100 border-slate-300"} p-6 rounded-lg border`}
    >
      <h3
        className={`font-semibold ${darkMode ? "text-white" : "text-slate-900"} mb-4`}
      >
        {title}
      </h3>
      <div className="space-y-3">
        {items.map((item, idx) => {
          const badgeClass = darkMode
            ? item.badgeDarkClass
            : item.badgeLightClass;
          return (
            <div key={idx} className="flex justify-between items-start text-sm">
              <div>
                <p
                  className={`font-medium ${darkMode ? "text-white" : "text-slate-900"}`}
                >
                  {item.title}
                </p>
                <p
                  className={`${darkMode ? "text-slate-400" : "text-slate-600"} text-xs mt-1`}
                >
                  {item.subtitle}
                </p>
              </div>
              <span
                className={`px-2 py-1 rounded text-xs font-semibold whitespace-nowrap ml-2 ${badgeClass}`}
              >
                {item.badge}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// Component: FilterSelect
function FilterSelect({ label, options, darkMode }) {
  return (
    <div>
      <label
        className={`text-sm ${darkMode ? "text-slate-300" : "text-slate-700"} block mb-2`}
      >
        {label}
      </label>
      <select
        className={`w-full ${darkMode ? "bg-slate-800/50 border-slate-700 text-slate-300" : "bg-slate-100 border-slate-300 text-slate-900"} border rounded px-3 py-2 text-sm focus:outline-none focus:border-blue-600`}
      >
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </div>
  );
}

// Properties Content
function PropertiesContent({ darkMode, onAction }) {
  const textColor = darkMode ? "text-white" : "text-slate-900";
  const secondaryTextColor = darkMode ? "text-slate-400" : "text-slate-600";
  const tertiaryTextColor = darkMode ? "text-slate-300" : "text-slate-700";
  const cardBg = darkMode ? "bg-slate-800/50" : "bg-slate-100";
  const cardBorder = darkMode ? "border-slate-700" : "border-slate-300";
  const tableHeaderBg = darkMode ? "bg-slate-900/50" : "bg-slate-200";
  const tableBorder = darkMode ? "border-slate-700" : "border-slate-300";
  const tableRowHover = darkMode
    ? "hover:bg-slate-700/30"
    : "hover:bg-slate-200/50";

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className={`text-3xl font-bold ${textColor}`}>Properties</h1>
        <button
          onClick={onAction}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm transition"
        >
          New Property
        </button>
      </div>
      <p className={secondaryTextColor}>Manage and monitor all properties</p>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        <MetricCard
          title="Total Properties"
          value="2"
          subtitle=""
          darkMode={darkMode}
          color="blue"
        />
        <MetricCard
          title="Active Issues"
          value="7"
          subtitle=""
          darkMode={darkMode}
          color="yellow"
        />
        <MetricCard
          title="High-Priority Issues"
          value="5"
          subtitle=""
          darkMode={darkMode}
          color="red"
        />
        <MetricCard
          title="Upcoming Appointments"
          value="0"
          subtitle=""
          darkMode={darkMode}
          color="green"
        />
        <MetricCard
          title="SLA Risks"
          value="0"
          subtitle=""
          darkMode={darkMode}
          color="blue"
        />
      </div>

      <div
        className={`overflow-x-auto ${cardBg} rounded-lg border ${cardBorder}`}
      >
        <table className="w-full text-sm">
          <thead className={`border-b ${tableBorder} ${tableHeaderBg}`}>
            <tr>
              <th className={`px-4 py-3 text-left ${tertiaryTextColor}`}>
                Address
              </th>
              <th className={`px-4 py-3 text-left ${tertiaryTextColor}`}>
                Units
              </th>
              <th className={`px-4 py-3 text-left ${tertiaryTextColor}`}>
                Occupied
              </th>
              <th className={`px-4 py-3 text-left ${tertiaryTextColor}`}>
                Issues
              </th>
              <th className={`px-4 py-3 text-left ${tertiaryTextColor}`}>
                Manager
              </th>
              <th className={`px-4 py-3 text-left ${tertiaryTextColor}`}>
                Status
              </th>
            </tr>
          </thead>
          <tbody className={`divide-y ${tableBorder}`}>
            <tr className={tableRowHover}>
              <td className={`px-4 py-3 ${tertiaryTextColor}`}>
                1106 Monroe St
              </td>
              <td className={`px-4 py-3 ${tertiaryTextColor}`}>3</td>
              <td className={`px-4 py-3 ${tertiaryTextColor}`}>2/3</td>
              <td className="px-4 py-3">
                <span
                  className={`px-2 py-1 rounded text-xs font-semibold ${
                    darkMode
                      ? "bg-yellow-600/20 text-yellow-300"
                      : "bg-yellow-100 text-yellow-700"
                  }`}
                >
                  🟡 1
                </span>
              </td>
              <td className={`px-4 py-3 ${tertiaryTextColor}`}>
                Shahid Jamshaid
              </td>
              <td className="px-4 py-3">
                <span
                  className={`px-2 py-1 text-xs rounded font-semibold ${
                    darkMode
                      ? "bg-green-600/20 text-green-300"
                      : "bg-green-100 text-green-700"
                  }`}
                >
                  Healthy
                </span>
              </td>
            </tr>
            <tr className={tableRowHover}>
              <td className={`px-4 py-3 ${tertiaryTextColor}`}>
                1200 Monroe St
              </td>
              <td className={`px-4 py-3 ${tertiaryTextColor}`}>6</td>
              <td className={`px-4 py-3 ${tertiaryTextColor}`}>6/6</td>
              <td className="px-4 py-3">
                <span
                  className={`px-2 py-1 rounded text-xs font-semibold ${
                    darkMode
                      ? "bg-red-600/20 text-red-300"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  🔴 6 (5 high)
                </span>
              </td>
              <td className={`px-4 py-3 ${tertiaryTextColor}`}>
                Shahid Jamshaid
              </td>
              <td className="px-4 py-3">
                <span
                  className={`px-2 py-1 text-xs rounded font-semibold ${
                    darkMode
                      ? "bg-green-600/20 text-green-300"
                      : "bg-green-100 text-green-700"
                  }`}
                >
                  Healthy
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

// Calendar Content
function CalendarContent({ darkMode, onAction }) {
  const [filterType, setFilterType] = useState("all");
  const [viewMode, setViewMode] = useState("month");
  const [selectedProperty, setSelectedProperty] = useState("all");

  const textColor = darkMode ? "text-white" : "text-slate-900";
  const secondaryTextColor = darkMode ? "text-slate-400" : "text-slate-600";
  const tertiaryTextColor = darkMode ? "text-slate-300" : "text-slate-700";
  const cardBg = darkMode ? "bg-slate-800/50" : "bg-slate-100";
  const cardBorder = darkMode ? "border-slate-700" : "border-slate-300";
  const cellBg = darkMode ? "bg-slate-900/50" : "bg-slate-200/50";
  const selectBg = darkMode
    ? "bg-slate-800 border-slate-700 text-slate-300"
    : "bg-slate-100 border-slate-300 text-slate-900";

  const calendarDays = Array.from({ length: 28 }, (_, i) => i + 1);
  const dayLabels = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  // Event data with types
  const allEvents = {
    13: [
      {
        type: "approval",
        text: "Approval apr-1: $200",
        property: "1200 monroe",
      },
    ],
    14: [
      {
        type: "approval",
        text: "Approval apr-12: $200",
        property: "1200 monroe",
      },
      {
        type: "approval",
        text: "Approval apr-3: $500",
        property: "1200 monroe",
      },
    ],
    15: [
      {
        type: "ticket",
        text: "Ticket #8: Security deposit",
        property: "1200 monroe",
      },
    ],
    16: [
      { type: "ticket", text: "Ticket #11: Fix door", property: "1106 monroe" },
      {
        type: "approval",
        text: "Approval apr-4: $300",
        property: "1200 monroe",
      },
    ],
  };

  // Event color configuration
  const eventColors = {
    approval: {
      dark: "bg-green-600/30 text-green-300 border-green-600/50",
      light: "bg-green-100 text-green-700 border-green-300",
    },
    ticket: {
      dark: "bg-blue-600/30 text-blue-300 border-blue-600/50",
      light: "bg-blue-100 text-blue-700 border-blue-300",
    },
    maintenance: {
      dark: "bg-yellow-600/30 text-yellow-300 border-yellow-600/50",
      light: "bg-yellow-100 text-yellow-700 border-yellow-300",
    },
  };

  // Filter events based on type and property
  const getFilteredEvents = (dayEvents) => {
    if (!dayEvents) return [];
    return dayEvents.filter((event) => {
      const typeMatch = filterType === "all" || event.type === filterType;
      const propertyMatch =
        selectedProperty === "all" ||
        event.property === selectedProperty.toLowerCase().replace(" ", "");
      return typeMatch && propertyMatch;
    });
  };

  // Get event icon
  const getEventIcon = (type) => {
    const icons = {
      approval: "💰",
      ticket: "🔧",
      maintenance: "🔨",
    };
    return icons[type] || "📌";
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className={`text-3xl font-bold ${textColor}`}>Calendar</h1>
        <button
          onClick={onAction}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm transition"
        >
          New Event
        </button>
      </div>
      <p className={secondaryTextColor}>
        Property management events & scheduling
      </p>

      <div className="grid md:grid-cols-4 gap-4">
        <MetricCard
          title="Total Events"
          value="13"
          subtitle=""
          darkMode={darkMode}
          color="blue"
        />
        <MetricCard
          title="Pending"
          value="13"
          subtitle=""
          darkMode={darkMode}
          color="yellow"
        />
        <MetricCard
          title="In Progress"
          value="0"
          subtitle=""
          darkMode={darkMode}
          color="blue"
        />
        <MetricCard
          title="AI Insights"
          value="13 overdue"
          subtitle="High priority tasks"
          darkMode={darkMode}
          color="red"
        />
      </div>

      {/* Filters */}
      <div className={`${cardBg} p-6 rounded-lg border ${cardBorder}`}>
        <h3 className={`text-lg font-semibold ${textColor} mb-4`}>
          Filters & View
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* View Mode */}
          <div>
            <label className={`text-sm ${secondaryTextColor} block mb-2`}>
              View Mode
            </label>
            <select
              value={viewMode}
              onChange={(e) => setViewMode(e.target.value)}
              className={`w-full ${selectBg} border rounded px-3 py-2 text-sm focus:outline-none focus:border-blue-600`}
            >
              <option value="month">Month</option>
              <option value="week">Week</option>
              <option value="day">Day</option>
            </select>
          </div>

          {/* Event Type Filter */}
          <div>
            <label className={`text-sm ${secondaryTextColor} block mb-2`}>
              Event Type
            </label>
            <select
              value={filterType}
              onChange={(e) => setFilterType(e.target.value)}
              className={`w-full ${selectBg} border rounded px-3 py-2 text-sm focus:outline-none focus:border-blue-600`}
            >
              <option value="all">All Events</option>
              <option value="approval">Approvals</option>
              <option value="ticket">Tickets</option>
              <option value="maintenance">Maintenance</option>
            </select>
          </div>

          {/* Property Filter */}
          <div>
            <label className={`text-sm ${secondaryTextColor} block mb-2`}>
              Property
            </label>
            <select
              value={selectedProperty}
              onChange={(e) => setSelectedProperty(e.target.value)}
              className={`w-full ${selectBg} border rounded px-3 py-2 text-sm focus:outline-none focus:border-blue-600`}
            >
              <option value="all">All Properties</option>
              <option value="1200 monroe">1200 Monroe St</option>
              <option value="1106 monroe">1106 Monroe St</option>
            </select>
          </div>
        </div>
      </div>

      {/* Calendar */}
      <div className={`${cardBg} p-6 rounded-lg border ${cardBorder}`}>
        <h3 className={`text-lg font-semibold ${textColor} mb-4`}>
          February 2026
        </h3>

        {/* Calendar Grid */}
        <div className="grid grid-cols-7 gap-2">
          {/* Day labels */}
          {dayLabels.map((day) => (
            <div
              key={day}
              className={`text-center font-semibold ${tertiaryTextColor} py-2 text-sm`}
            >
              {day}
            </div>
          ))}

          {/* Calendar days */}
          {calendarDays.map((day) => {
            const dayEvents = getFilteredEvents(allEvents[day]);
            return (
              <div
                key={day}
                className={`${cellBg} p-3 rounded border ${cardBorder} min-h-24 cursor-pointer hover:border-blue-500 transition overflow-hidden`}
              >
                {/* Date positioned left */}
                <div
                  className={`text-left font-bold ${textColor} text-lg mb-2`}
                >
                  {day}
                </div>

                {/* Events */}
                {dayEvents.length > 0 && (
                  <div className="space-y-1">
                    {dayEvents.slice(0, 2).map((event, idx) => {
                      const colors =
                        eventColors[event.type] || eventColors.ticket;
                      const colorClass = darkMode ? colors.dark : colors.light;
                      return (
                        <div
                          key={idx}
                          className={`text-xs p-1 rounded border ${colorClass} truncate`}
                          title={`${getEventIcon(event.type)} ${event.text}`}
                        >
                          {getEventIcon(event.type)} {event.text}
                        </div>
                      );
                    })}
                    {dayEvents.length > 2 && (
                      <div className={`text-xs ${textColor} font-semibold`}>
                        +{dayEvents.length - 2} more
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Event Type Legend */}
      <div className={`${cardBg} p-4 rounded-lg border ${cardBorder}`}>
        <h4 className={`text-sm font-semibold ${textColor} mb-3`}>
          Event Types
        </h4>
        <div className="grid grid-cols-3 gap-3">
          <div className="flex items-center gap-2">
            <span className="text-lg">💰</span>
            <span className={secondaryTextColor}>Approval</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-lg">🔧</span>
            <span className={secondaryTextColor}>Ticket</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-lg">🔨</span>
            <span className={secondaryTextColor}>Maintenance</span>
          </div>
        </div>
      </div>
    </div>
  );
}

// Reports Content
function ReportsContent({ darkMode }) {
  const textColor = darkMode ? "text-white" : "text-slate-900";
  const secondaryTextColor = darkMode ? "text-slate-400" : "text-slate-600";
  const tertiaryTextColor = darkMode ? "text-slate-300" : "text-slate-700";
  const cardBg = darkMode ? "bg-slate-800/50" : "bg-slate-100";
  const cardBorder = darkMode ? "border-slate-700" : "border-slate-300";
  const tableBorder = darkMode ? "border-slate-700" : "border-slate-300";

  return (
    <div className="space-y-6">
      <h1 className={`text-3xl font-bold ${textColor}`}>Reports & Analytics</h1>
      <p className={secondaryTextColor}>
        Property management performance metrics
      </p>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <MetricCard
          title="Total Revenue"
          value="$12,510"
          subtitle="Last 90 days"
          darkMode={darkMode}
          color="green"
        />
        <MetricCard
          title="Occupancy Rate"
          value="88.9%"
          subtitle="8 of 9 units"
          darkMode={darkMode}
          color="green"
        />
        <MetricCard
          title="Avg Resolution Time"
          value="0.3 days"
          subtitle="Ticket avg"
          darkMode={darkMode}
          color="blue"
        />
        <MetricCard
          title="Open & Overdue"
          value="7 / 3"
          subtitle="Tickets"
          darkMode={darkMode}
          color="red"
        />
      </div>

      <div className={`${cardBg} p-6 rounded-lg border ${cardBorder}`}>
        <h3 className={`text-lg font-semibold ${textColor} mb-4`}>
          Property Performance
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className={`border-b ${tableBorder}`}>
              <tr>
                <th className={`px-4 py-3 text-left ${tertiaryTextColor}`}>
                  Property
                </th>
                <th className={`px-4 py-3 text-left ${tertiaryTextColor}`}>
                  Occupancy
                </th>
                <th className={`px-4 py-3 text-left ${tertiaryTextColor}`}>
                  Revenue
                </th>
                <th className={`px-4 py-3 text-left ${tertiaryTextColor}`}>
                  Maintenance
                </th>
                <th className={`px-4 py-3 text-left ${tertiaryTextColor}`}>
                  Issues
                </th>
              </tr>
            </thead>
            <tbody className={`divide-y ${tableBorder}`}>
              <tr>
                <td className={`px-4 py-3 ${tertiaryTextColor}`}>
                  1200 Monroe St
                </td>
                <td className={`px-4 py-3 ${tertiaryTextColor}`}>100%</td>
                <td className={`px-4 py-3 ${tertiaryTextColor}`}>$3,970</td>
                <td className={`px-4 py-3 ${tertiaryTextColor}`}>$333.33</td>
                <td
                  className={`px-4 py-3 ${darkMode ? "text-red-400" : "text-red-600"}`}
                >
                  10
                </td>
              </tr>
              <tr>
                <td className={`px-4 py-3 ${tertiaryTextColor}`}>
                  1106 Monroe St
                </td>
                <td className={`px-4 py-3 ${tertiaryTextColor}`}>66.7%</td>
                <td className={`px-4 py-3 ${tertiaryTextColor}`}>$1,100</td>
                <td className={`px-4 py-3 ${tertiaryTextColor}`}>$0</td>
                <td
                  className={`px-4 py-3 ${darkMode ? "text-yellow-400" : "text-yellow-600"}`}
                >
                  1
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

// Audit Content
function AuditContent({ darkMode }) {
  const textColor = darkMode ? "text-white" : "text-slate-900";
  const secondaryTextColor = darkMode ? "text-slate-400" : "text-slate-600";
  const tertiaryTextColor = darkMode ? "text-slate-300" : "text-slate-700";
  const cardBg = darkMode ? "bg-slate-800/50" : "bg-slate-100";
  const cardBorder = darkMode ? "border-slate-700" : "border-slate-300";

  return (
    <div className="space-y-6">
      <h1 className={`text-3xl font-bold ${textColor}`}>Audit Logs</h1>
      <p className={secondaryTextColor}>
        Complete activity tracking and compliance logging
      </p>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <MetricCard
          title="Total Logs"
          value="9"
          subtitle="0 today"
          darkMode={darkMode}
          color="blue"
        />
        <MetricCard
          title="High Risk Events"
          value="8"
          subtitle="Flagged"
          darkMode={darkMode}
          color="red"
        />
        <MetricCard
          title="Deletions"
          value="0"
          subtitle="This month"
          darkMode={darkMode}
          color="green"
        />
        <MetricCard
          title="Retention"
          value="90 days"
          subtitle="Policy"
          darkMode={darkMode}
          color="blue"
        />
      </div>

      <div className={`${cardBg} p-6 rounded-lg border ${cardBorder}`}>
        <h3 className={`text-lg font-semibold ${textColor} mb-4`}>
          Recent Activity Feed
        </h3>
        <div className="space-y-3">
          <div
            className={`flex justify-between items-center text-sm border-b ${cardBorder} pb-3`}
          >
            <span className={tertiaryTextColor}>Ticket #23 updated</span>
            <span className={secondaryTextColor}>2026-02-20 01:51</span>
          </div>
          <div
            className={`flex justify-between items-center text-sm border-b ${cardBorder} pb-3`}
          >
            <span className={tertiaryTextColor}>Ticket #23 created</span>
            <span className={secondaryTextColor}>2026-02-20 01:51</span>
          </div>
          <div
            className={`flex justify-between items-center text-sm border-b ${cardBorder} pb-3`}
          >
            <span className={tertiaryTextColor}>Ticket #22 created</span>
            <span className={secondaryTextColor}>2026-02-20 01:50</span>
          </div>
          <div className="flex justify-between items-center text-sm">
            <span className={tertiaryTextColor}>Ticket #21 created</span>
            <span className={secondaryTextColor}>2026-02-20 01:47</span>
          </div>
        </div>
      </div>
    </div>
  );
}

// Memory Content
function MemoryContent({ darkMode }) {
  const [selectedDocument, setSelectedDocument] = useState(null);

  const textColor = darkMode ? "text-white" : "text-slate-900";
  const secondaryTextColor = darkMode ? "text-slate-400" : "text-slate-600";
  const tertiaryTextColor = darkMode ? "text-slate-300" : "text-slate-700";
  const cardBg = darkMode ? "bg-slate-800/50" : "bg-slate-100";
  const cardBorder = darkMode ? "border-slate-700" : "border-slate-300";
  const itemBg = darkMode ? "bg-slate-900/50" : "bg-slate-200/50";

  // Document data
  const documents = [
    {
      id: 1,
      name: "Violation_Notice.jpg",
      chunks: 2,
      date: "Feb 18, 2026, 01:57 AM",
      content: `Violation_Notice.jpg

2 chunks
Morristown  
Division of Housing and Property Maintenance  
200 South Street  
Morristown, NJ 07960  
(973) 292-6700  

TOWN OF MORRISTOWN  
200 SOUTH ST  
MORRISTOWN, NJ 07963  

VIOLATION NOTICE  

Block 4601 Lot 10 Qualifier 200 SOUTH ST  
Inspector Spatial Data Logic  

Inspection Notes  
Violation Notice Test.  

You are hereby notified that a code official inspected the above referenced premises and determined that there is a violation of the municipal code. The violation listed below must be completed on or before the violation abatement date indicated. Failure to obey this order of the code official shall result in the issuance of a summons resulting in a mandatory court appearance and possible penalty assessment in compliance with this code.

Tracking #  
HPM-07-23-0501  

Violations Resulting From This Inspection  
Location Interior  
Date 3/7/2023 Compliance Date 3/28/2023 Status OPEN  
Statute 13-80 a.: CERTIFICATE OF HABITABILITY.  
Summary Violation Notice Test.  

If you have questions regarding the status or nature of a violation please contact the department at  
(973) 292-6700  

Mark King, Chief Housing Inspector`,
    },
  ];

  return (
    <div className="space-y-6">
      <h1 className={`text-3xl font-bold ${textColor}`}>
        Memory / Knowledge Base
      </h1>
      <p className={secondaryTextColor}>
        Documents indexed in your Knowledge Base
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Documents List */}
        <div
          className={`lg:col-span-1 ${cardBg} p-6 rounded-lg border ${cardBorder}`}
        >
          <h3 className={`text-lg font-semibold ${textColor} mb-4`}>
            Your Documents
          </h3>
          <div className="space-y-3">
            {documents.map((doc) => (
              <div
                key={doc.id}
                onClick={() => setSelectedDocument(doc)}
                className={`p-4 ${itemBg} rounded border ${cardBorder} hover:border-blue-600/50 cursor-pointer transition ${
                  selectedDocument?.id === doc.id
                    ? "border-blue-600 ring-2 ring-blue-600/20"
                    : ""
                }`}
              >
                <p className={`${textColor} font-medium`}>📄 {doc.name}</p>
                <p className={`${secondaryTextColor} text-sm mt-1`}>
                  {doc.chunks} chunks • {doc.date}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Document Viewer */}
        <div
          className={`lg:col-span-2 ${cardBg} p-6 rounded-lg border ${cardBorder}`}
        >
          {selectedDocument ? (
            <>
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className={`text-lg font-semibold ${textColor}`}>
                    {selectedDocument.name}
                  </h3>
                  <p className={`${secondaryTextColor} text-sm mt-1`}>
                    {selectedDocument.chunks} chunks • {selectedDocument.date}
                  </p>
                </div>
                <button
                  onClick={() => setSelectedDocument(null)}
                  className={`p-2 rounded hover:${darkMode ? "bg-slate-700" : "bg-slate-200"} transition`}
                  title="Close"
                >
                  ✕
                </button>
              </div>
              <div
                className={`${darkMode ? "bg-slate-900/30" : "bg-slate-200/30"} p-4 rounded border ${cardBorder} max-h-96 overflow-y-auto`}
              >
                <p
                  className={`${tertiaryTextColor} text-sm whitespace-pre-wrap leading-relaxed`}
                >
                  {selectedDocument.content}
                </p>
              </div>
            </>
          ) : (
            <div className="flex items-center justify-center h-96">
              <p className={`${secondaryTextColor} text-center`}>
                Select a document from the list to view its content
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// Data
const myTickets = [
  {
    title: "#1823 - Database Optimization",
    subtitle: "Assigned to: You",
    badge: "In Progress",
    badgeDarkClass: "bg-blue-600/20 text-blue-300",
    badgeLightClass: "bg-blue-500 text-white",
  },
  {
    title: "#1824 - API Integration Test",
    subtitle: "Assigned to: You",
    badge: "Pending",
    badgeDarkClass: "bg-yellow-600/20 text-yellow-300",
    badgeLightClass: "bg-yellow-500 text-white",
  },
  {
    title: "#1825 - Server Maintenance",
    subtitle: "Assigned to: You",
    badge: "Scheduled",
    badgeDarkClass: "bg-slate-600/20 text-slate-300",
    badgeLightClass: "bg-slate-600 text-white",
  },
];

const approvalsWaiting = [
  {
    title: "Refund Request - Order #5421",
    subtitle: "Waiting for: Finance Manager",
    badge: "Awaiting",
    badgeDarkClass: "bg-yellow-600/20 text-yellow-300",
    badgeLightClass: "bg-yellow-500 text-white",
  },
  {
    title: "Budget Approval - Q1 Spend",
    subtitle: "Waiting for: Director",
    badge: "Awaiting",
    badgeDarkClass: "bg-yellow-600/20 text-yellow-300",
    badgeLightClass: "bg-yellow-500 text-white",
  },
  {
    title: "Policy Change Request",
    subtitle: "Waiting for: Compliance Team",
    badge: "Awaiting",
    badgeDarkClass: "bg-yellow-600/20 text-yellow-300",
    badgeLightClass: "bg-yellow-500 text-white",
  },
];

const urgentIssues = [
  {
    title: "Unit 4B - Water Leak Detected",
    subtitle: "Requires immediate escalation",
    badge: "CRITICAL",
    badgeDarkClass: "bg-red-600/20 text-red-300",
    badgeLightClass: "bg-red-600 text-white",
  },
  {
    title: "SLA Risk - Ticket #1823",
    subtitle: "Deadline: 2 hours remaining",
    badge: "URGENT",
    badgeDarkClass: "bg-orange-600/20 text-orange-300",
    badgeLightClass: "bg-orange-600 text-white",
  },
  {
    title: "System Downtime Alert",
    subtitle: "API Gateway experiencing issues",
    badge: "CRITICAL",
    badgeDarkClass: "bg-red-600/20 text-red-300",
    badgeLightClass: "bg-red-600 text-white",
  },
];

const ticketsData = [
  {
    id: "#20",
    property: "1200 Monroe St",
    type: "Refund",
    issue: "Refund issue",
    priority: "high",
    assigned: "John",
    status: "in_progress",
  },
  {
    id: "#17",
    property: "1106 Monroe St",
    type: "Complaint",
    issue: "Fix water leak",
    priority: "medium",
    assigned: "Derick",
    status: "open",
  },
  {
    id: "#16",
    property: "1200 Monroe St",
    type: "Maintenance",
    issue: "Municipal Violation Notice",
    priority: "medium",
    assigned: "Unassigned",
    status: "open",
  },
  {
    id: "#15",
    property: "1200 Monroe St",
    type: "Complaint",
    issue: "Citation violation",
    priority: "high",
    assigned: "Unassigned",
    status: "open",
  },
  {
    id: "#14",
    property: "1200 Monroe St",
    type: "Complaint",
    issue: "Property maintenance",
    priority: "high",
    assigned: "Unassigned",
    status: "open",
  },
];

const approvalsData = [
  {
    id: "APR-20260218091229-T16",
    type: "Vendor Payment",
    property: "1200 Monroe St",
    amount: "$150.00",
    requestedBy: "muhammadalishahid14@gmail.com",
    status: "Pending",
  },
  {
    id: "APR-20260218091042-T15",
    type: "Vendor Payment",
    property: "1200 Monroe St",
    amount: "$150.00",
    requestedBy: "muhammadalishahid14@gmail.com",
    status: "Pending",
  },
  {
    id: "apr-12",
    type: "Credit",
    property: "1200 Monroe St",
    amount: "$200.00",
    requestedBy: "Derick",
    status: "Approved",
  },
  {
    id: "apr-1",
    type: "Credit",
    property: "1200 Monroe St",
    amount: "$200.00",
    requestedBy: "Derick",
    status: "Approved",
  },
  {
    id: "apr-4",
    type: "Credit",
    property: "1200 Monroe St",
    amount: "$300.00",
    requestedBy: "Paul",
    status: "Approved",
  },
];
