'use client';

import { useState, useMemo, useEffect } from 'react';
import { Flex } from "@/components/ui";
import { SectionTable, TableRow, type Status } from "./sectionTable";

export type GenericItem = {
  id: number;
  name: string | null;
  status: string | null;
  link: string | null;
};

export type StatusConfig = {
  priority: Record<string, number>;
  variants: Record<string, Status>; 
};

interface SectionTableSearchProps {
  initialItems: GenericItem[];
  statusConfig: StatusConfig;
  title: string;
  subtitle: string;
}

export default function SectionTableSearch({
  initialItems,
  statusConfig,
  title,
  subtitle
}: SectionTableSearchProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const ITEMS_PER_PAGE = 12;

  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm]);

  const filteredItems = useMemo(() => {
    if (!searchTerm.trim()) return initialItems;
    
    const normalizedSearch = searchTerm.toLowerCase().trim();
    return initialItems.filter(item => 
      item.name?.toLowerCase().includes(normalizedSearch)
    );
  }, [searchTerm, initialItems]);

  const sortedItems = useMemo(() => {
    return [...filteredItems].sort((a, b) => {
      const priorityA = statusConfig.priority[a.status || ''] ?? Number.MAX_SAFE_INTEGER;
      const priorityB = statusConfig.priority[b.status || ''] ?? Number.MAX_SAFE_INTEGER;
      
      if (priorityA !== priorityB) return priorityA - priorityB;

      if (a.name === null && b.name !== null) return 1;
      if (a.name !== null && b.name === null) return -1;
      if (a.name && b.name) {
        return a.name.localeCompare(b.name, undefined, { 
          sensitivity: 'base',
          caseFirst: 'false'
        });
      }
      return 0;
    });
  }, [filteredItems, statusConfig]);

  const totalPages = Math.ceil(sortedItems.length / ITEMS_PER_PAGE);
  const paginatedItems = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    return sortedItems.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  }, [sortedItems, currentPage]);

  const tableRows = useMemo(() => {
    return paginatedItems.map((item, index, array) => {
      if (!item.id) return null;

      const statusVariant = item.status 
        ? statusConfig.variants[item.status] || 'info'
        : 'info';

      return (
        <TableRow
          key={item.id}
          index={index}
          last={index === array.length - 1}
          name={item.name || 'Unnamed'}
          status={item.status || 'No status'}
          statusName={statusVariant}
          link={item.link || ''}
        />
      );
    }).filter(Boolean);
  }, [paginatedItems, statusConfig]);

  const goToPreviousPage = () => {
    setCurrentPage(prev => Math.max(prev - 1, 1));
  };

  const goToNextPage = () => {
    setCurrentPage(prev => Math.min(prev + 1, totalPages));
  };

  return (
    <Flex direction="column" gap={32} defaultStyle={{ width: "100%" }}>
      <Flex gap={20} align="center">
        <h1 className="heading1">{title}</h1>
        <h2 className="heading4 color-accent1">{subtitle}</h2>
      </Flex>

      <input
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="mono1 bg-gray1 color-gray5"
        style={{ width: "300px", padding: "8px" }}
      />

      <SectionTable tableList={tableRows} />
      
      {totalPages > 1 && (
        <Flex justify="center" gap={16} align="center" style={{ marginTop: '16px' }}>
          <button
            onClick={goToPreviousPage}
            disabled={currentPage === 1}
            className="bg-gray1 color-gray5 body4"
          >
            Previous
          </button>
          
          <span className="mono2 color-gray1">
            Page {currentPage} of {totalPages}
          </span>
          
          <button
            onClick={goToNextPage}
            disabled={currentPage === totalPages}
            className="bg-gray1 color-gray5 body4"
          >
            Next
          </button>
        </Flex>
      )}
    </Flex>
  );
}